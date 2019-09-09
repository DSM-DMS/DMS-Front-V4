import os
import glob
dir_path = os.getcwd()
os.chdir(dir_path + '/dist')

def readFiles():
    pathArr = []
    for file in list(glob.glob('*.*')):
        if(file != 'index.html' and file != 'service-worker.js'):
            pathArr.append(file)
    return pathArr

def readServiceWorker():
    fileReader = open('service-worker.js','r',encoding='UTF8')
    fileData = fileReader.read()
    fileReader.close()
    return fileData

def fileReplace():
    fileData = readServiceWorker().replace("['CACHE-FILES']", str(readFiles()))
    return fileData

def fileWriter():
    replacedFileData = fileReplace()
    fileWriter = open('service-worker.js', 'w', encoding='UTF8')
    fileWriter.write(replacedFileData)
    fileWriter.close()

fileWriter()