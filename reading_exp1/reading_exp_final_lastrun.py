#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.4),
    on Fri Nov  4 14:52:14 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.4'
expName = 'reading_exp_final'  # from the Builder filename that created this script
expInfo = {'participant': 'e.g. 8dhd2j', 'your_age': '', 'your_gender': 'Female, Male, Other'}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/miesogaard/Dokumenter/AU/reading_exp_final/reading_exp_final_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "initCode"
initCodeClock = core.Clock()
import random

story = ["story_1", "story_2", "story_3", "story_4", "story_5"]
dif_condition = ["_hfhs.xlsx", "_lfhs.xlsx", "_lfls.xlsx", "_hfls.xlsx", "_control.xlsx"]

random.shuffle(story)
random.shuffle(dif_condition)

selected_condition = ["", "", "", "", ""]

for i in range(0, 5):
    selected_condition[i] = 'resources/' + story[i] + dif_condition[i]
    
count = 0
count_extra = count
this_condition = selected_condition[0]

text_element = "You have now answered all the questions to the story. \n\n Now, you will have to read the next story. \n\n Press the space-button when you are ready to continue."

# Initialize components for Routine "firstWelcome"
firstWelcomeClock = core.Clock()
danish_welcome = visual.TextStim(win=win, name='danish_welcome',
    text='Velkommen til dette eksperiment!\n\nVenligst fortsæt eksperimentet i fuldskærmsvisning.\nNår eksperimentet er afsluttet, vent med at gøre noget indtil en besked på skærmen bekræfter, at data er blevet gemt.\n\n\nTryk på mellemrumstasten for at læse samtykkeerklæringen.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
welcome_resp = keyboard.Keyboard()

# Initialize components for Routine "consentForm"
consentFormClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='Dette er samtykkeerklæringen for dette eksperiment, som er en del af et Bachelorprojekt på Cognitive Science-uddannelsen på Aarhus Universitet.\n\nForventet tid for gennemførelse: 10-15 minutter\n\nHvis du har spørgsmål, kontakt venligst den ansvarlige for dette projekt:\nMie Buchhave Ryborg, 202004812@post.au.dk\n\nFor at deltage i dette eksperiment, skal du opfylde følgende krav:\n- Have normalt/korrigeret syn (du må godt bruge briller eller kontaktlinser)\n- Have dansk som modersmål\n\nDet brede fokus i dette bachelorprojekt er at undersøge læsning og forståelse af tekstmateriale. Den specifikke hypotese vil først blive fremlagt efter eksperimentet er færdigt, eftersom det muligvis vil kunne have indflydelse på resultaterne.\n\nDeltagelse i eksperimentet er frivilligt, og du er fri til at afbryde eksperimentet på et hvilket som helst tidspunkt. Dette gøres ved at trykke på “escape”-knappen på computeren og derefter lukke fanen. Al data indtil dette punkt vil blive slettet omgående. Vær opmærksom dog på, at du ikke kan deltage og fuldføre eksperimentet på et senere tidspunkt, hvis du vælger at afbryde.\n\nDa din data er anonymiseret, vil det ikke være muligt at identificere dig. Dette betyder også, at det ikke vil være muligt at slette din data, efter at eksperimentet er afsluttet.\n\nData vil blive gemt på en server via Pavlovia (pavlovia.org) samt i eksperimentets GitLab repositorium. Data vil derudover blive processeret lokalt på den ansvarliges egen computer. Al data vil blive slettet, når projektet er blevet evalueret i slutningen af januar 2023.\n\nVed at trykke på “J” på dit tastatur erklærer du dig enig i at have læst og forstået denne samtykkeerklæring. ',
    font='Arial',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
agree_resp = keyboard.Keyboard()

# Initialize components for Routine "confirmationForm"
confirmationFormClock = core.Clock()
confirmation_text = visual.TextStim(win=win, name='confirmation_text',
    text='Du har nu bekræftet samtykkeerklæringen.\n\n\nDa eksperimentet foregår på engelsk, vil resten af eksperimentet nu også skifte til engelsk.\n\nTryk på mellemrumstasten for at fortsætte til introduktionen.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
conf_resp = keyboard.Keyboard()

# Initialize components for Routine "welcomeScreen"
welcomeScreenClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='In a moment, you will be presented to a short story, one word at a time.\nWhen you have read the word on the screen, press the space-button immediately. \nContinue doing this until the story has finished.\n\nAfter the story, you have to answer a few questions.\n\nThis procedure will repeat five times.\n\nPress the space-button when you are ready to start reading...',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "showStory_2"
showStory_2Clock = core.Clock()
story_image = visual.ImageStim(
    win=win,
    name='story_image', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(1, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
word_resp = keyboard.Keyboard()

# Initialize components for Routine "afterStory"
afterStoryClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='The story is now finished.\n\nNow, you will have to answer some questions about the story.\nThere will be four answers, where one of them is correct.\n\nPress the corresponding number on your keyboard (1, 2, 3 or 4) that you think is the right answer.\n\nPress "enter" to read the first question.\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
text_7 = visual.TextStim(win=win, name='text_7',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "showQuestions"
showQuestionsClock = core.Clock()
question_image = visual.ImageStim(
    win=win,
    name='question_image', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(1.2, 0.7),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
question_resp = keyboard.Keyboard()

# Initialize components for Routine "afterQuestions"
afterQuestionsClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "extraCode"
extraCodeClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "initCode"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
initCodeComponents = []
for thisComponent in initCodeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
initCodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "initCode"-------
while continueRoutine:
    # get current time
    t = initCodeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=initCodeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in initCodeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "initCode"-------
for thisComponent in initCodeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "initCode" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "firstWelcome"-------
continueRoutine = True
# update component parameters for each repeat
welcome_resp.keys = []
welcome_resp.rt = []
_welcome_resp_allKeys = []
# keep track of which components have finished
firstWelcomeComponents = [danish_welcome, welcome_resp]
for thisComponent in firstWelcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
firstWelcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "firstWelcome"-------
while continueRoutine:
    # get current time
    t = firstWelcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=firstWelcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *danish_welcome* updates
    if danish_welcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        danish_welcome.frameNStart = frameN  # exact frame index
        danish_welcome.tStart = t  # local t and not account for scr refresh
        danish_welcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(danish_welcome, 'tStartRefresh')  # time at next scr refresh
        danish_welcome.setAutoDraw(True)
    
    # *welcome_resp* updates
    waitOnFlip = False
    if welcome_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_resp.frameNStart = frameN  # exact frame index
        welcome_resp.tStart = t  # local t and not account for scr refresh
        welcome_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_resp, 'tStartRefresh')  # time at next scr refresh
        welcome_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(welcome_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(welcome_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if welcome_resp.status == STARTED and not waitOnFlip:
        theseKeys = welcome_resp.getKeys(keyList=['space'], waitRelease=False)
        _welcome_resp_allKeys.extend(theseKeys)
        if len(_welcome_resp_allKeys):
            welcome_resp.keys = _welcome_resp_allKeys[-1].name  # just the last key pressed
            welcome_resp.rt = _welcome_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in firstWelcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "firstWelcome"-------
for thisComponent in firstWelcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('danish_welcome.started', danish_welcome.tStartRefresh)
thisExp.addData('danish_welcome.stopped', danish_welcome.tStopRefresh)
# check responses
if welcome_resp.keys in ['', [], None]:  # No response was made
    welcome_resp.keys = None
thisExp.addData('welcome_resp.keys',welcome_resp.keys)
if welcome_resp.keys != None:  # we had a response
    thisExp.addData('welcome_resp.rt', welcome_resp.rt)
thisExp.addData('welcome_resp.started', welcome_resp.tStartRefresh)
thisExp.addData('welcome_resp.stopped', welcome_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "firstWelcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consentForm"-------
continueRoutine = True
# update component parameters for each repeat
agree_resp.keys = []
agree_resp.rt = []
_agree_resp_allKeys = []
# keep track of which components have finished
consentFormComponents = [text_4, agree_resp]
for thisComponent in consentFormComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consentFormClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consentForm"-------
while continueRoutine:
    # get current time
    t = consentFormClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consentFormClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *agree_resp* updates
    waitOnFlip = False
    if agree_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        agree_resp.frameNStart = frameN  # exact frame index
        agree_resp.tStart = t  # local t and not account for scr refresh
        agree_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(agree_resp, 'tStartRefresh')  # time at next scr refresh
        agree_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(agree_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(agree_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if agree_resp.status == STARTED and not waitOnFlip:
        theseKeys = agree_resp.getKeys(keyList=['j'], waitRelease=False)
        _agree_resp_allKeys.extend(theseKeys)
        if len(_agree_resp_allKeys):
            agree_resp.keys = _agree_resp_allKeys[-1].name  # just the last key pressed
            agree_resp.rt = _agree_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consentFormComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consentForm"-------
for thisComponent in consentFormComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
# check responses
if agree_resp.keys in ['', [], None]:  # No response was made
    agree_resp.keys = None
thisExp.addData('agree_resp.keys',agree_resp.keys)
if agree_resp.keys != None:  # we had a response
    thisExp.addData('agree_resp.rt', agree_resp.rt)
thisExp.nextEntry()
# the Routine "consentForm" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "confirmationForm"-------
continueRoutine = True
# update component parameters for each repeat
conf_resp.keys = []
conf_resp.rt = []
_conf_resp_allKeys = []
# keep track of which components have finished
confirmationFormComponents = [confirmation_text, conf_resp]
for thisComponent in confirmationFormComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
confirmationFormClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "confirmationForm"-------
while continueRoutine:
    # get current time
    t = confirmationFormClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=confirmationFormClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *confirmation_text* updates
    if confirmation_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        confirmation_text.frameNStart = frameN  # exact frame index
        confirmation_text.tStart = t  # local t and not account for scr refresh
        confirmation_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(confirmation_text, 'tStartRefresh')  # time at next scr refresh
        confirmation_text.setAutoDraw(True)
    
    # *conf_resp* updates
    waitOnFlip = False
    if conf_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        conf_resp.frameNStart = frameN  # exact frame index
        conf_resp.tStart = t  # local t and not account for scr refresh
        conf_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(conf_resp, 'tStartRefresh')  # time at next scr refresh
        conf_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(conf_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(conf_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if conf_resp.status == STARTED and not waitOnFlip:
        theseKeys = conf_resp.getKeys(keyList=['space'], waitRelease=False)
        _conf_resp_allKeys.extend(theseKeys)
        if len(_conf_resp_allKeys):
            conf_resp.keys = _conf_resp_allKeys[-1].name  # just the last key pressed
            conf_resp.rt = _conf_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in confirmationFormComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "confirmationForm"-------
for thisComponent in confirmationFormComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('confirmation_text.started', confirmation_text.tStartRefresh)
thisExp.addData('confirmation_text.stopped', confirmation_text.tStopRefresh)
# check responses
if conf_resp.keys in ['', [], None]:  # No response was made
    conf_resp.keys = None
thisExp.addData('conf_resp.keys',conf_resp.keys)
if conf_resp.keys != None:  # we had a response
    thisExp.addData('conf_resp.rt', conf_resp.rt)
thisExp.addData('conf_resp.started', conf_resp.tStartRefresh)
thisExp.addData('conf_resp.stopped', conf_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "confirmationForm" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "welcomeScreen"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
welcomeScreenComponents = [text, key_resp]
for thisComponent in welcomeScreenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
welcomeScreenClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "welcomeScreen"-------
while continueRoutine:
    # get current time
    t = welcomeScreenClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=welcomeScreenClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeScreenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "welcomeScreen"-------
for thisComponent in welcomeScreenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "welcomeScreen" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('resources/condition_1.xlsx'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(this_condition, selection='4:'),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "showStory_2"-------
        continueRoutine = True
        # update component parameters for each repeat
        story_image.setImage(words)
        word_resp.keys = []
        word_resp.rt = []
        _word_resp_allKeys = []
        # keep track of which components have finished
        showStory_2Components = [story_image, word_resp]
        for thisComponent in showStory_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        showStory_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "showStory_2"-------
        while continueRoutine:
            # get current time
            t = showStory_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=showStory_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *story_image* updates
            if story_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                story_image.frameNStart = frameN  # exact frame index
                story_image.tStart = t  # local t and not account for scr refresh
                story_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(story_image, 'tStartRefresh')  # time at next scr refresh
                story_image.setAutoDraw(True)
            
            # *word_resp* updates
            waitOnFlip = False
            if word_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                word_resp.frameNStart = frameN  # exact frame index
                word_resp.tStart = t  # local t and not account for scr refresh
                word_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(word_resp, 'tStartRefresh')  # time at next scr refresh
                word_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(word_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(word_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if word_resp.status == STARTED and not waitOnFlip:
                theseKeys = word_resp.getKeys(keyList=['space'], waitRelease=False)
                _word_resp_allKeys.extend(theseKeys)
                if len(_word_resp_allKeys):
                    word_resp.keys = _word_resp_allKeys[-1].name  # just the last key pressed
                    word_resp.rt = _word_resp_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in showStory_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "showStory_2"-------
        for thisComponent in showStory_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('story_image.started', story_image.tStartRefresh)
        trials.addData('story_image.stopped', story_image.tStopRefresh)
        # check responses
        if word_resp.keys in ['', [], None]:  # No response was made
            word_resp.keys = None
        trials.addData('word_resp.keys',word_resp.keys)
        if word_resp.keys != None:  # we had a response
            trials.addData('word_resp.rt', word_resp.rt)
        trials.addData('word_resp.started', word_resp.tStartRefresh)
        trials.addData('word_resp.stopped', word_resp.tStopRefresh)
        # the Routine "showStory_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    
    # ------Prepare to start Routine "afterStory"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    afterStoryComponents = [text_3, key_resp_4]
    for thisComponent in afterStoryComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    afterStoryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "afterStory"-------
    while continueRoutine:
        # get current time
        t = afterStoryClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=afterStoryClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        
        # *key_resp_4* updates
        waitOnFlip = False
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['return'], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in afterStoryComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "afterStory"-------
    for thisComponent in afterStoryComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('text_3.started', text_3.tStartRefresh)
    trials_2.addData('text_3.stopped', text_3.tStopRefresh)
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    trials_2.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        trials_2.addData('key_resp_4.rt', key_resp_4.rt)
    # the Routine "afterStory" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    questionsLoop = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(this_condition, selection='0:4'),
        seed=None, name='questionsLoop')
    thisExp.addLoop(questionsLoop)  # add the loop to the experiment
    thisQuestionsLoop = questionsLoop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisQuestionsLoop.rgb)
    if thisQuestionsLoop != None:
        for paramName in thisQuestionsLoop:
            exec('{} = thisQuestionsLoop[paramName]'.format(paramName))
    
    for thisQuestionsLoop in questionsLoop:
        currentLoop = questionsLoop
        # abbreviate parameter names if possible (e.g. rgb = thisQuestionsLoop.rgb)
        if thisQuestionsLoop != None:
            for paramName in thisQuestionsLoop:
                exec('{} = thisQuestionsLoop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "fixation"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        fixationComponents = [text_7]
        for thisComponent in fixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "fixation"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = fixationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=fixationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_7* updates
            if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_7.frameNStart = frameN  # exact frame index
                text_7.tStart = t  # local t and not account for scr refresh
                text_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
                text_7.setAutoDraw(True)
            if text_7.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_7.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    text_7.tStop = t  # not accounting for scr refresh
                    text_7.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_7, 'tStopRefresh')  # time at next scr refresh
                    text_7.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "fixation"-------
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        questionsLoop.addData('text_7.started', text_7.tStartRefresh)
        questionsLoop.addData('text_7.stopped', text_7.tStopRefresh)
        
        # ------Prepare to start Routine "showQuestions"-------
        continueRoutine = True
        # update component parameters for each repeat
        question_image.setImage(questions)
        question_resp.keys = []
        question_resp.rt = []
        _question_resp_allKeys = []
        # keep track of which components have finished
        showQuestionsComponents = [question_image, question_resp]
        for thisComponent in showQuestionsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        showQuestionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "showQuestions"-------
        while continueRoutine:
            # get current time
            t = showQuestionsClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=showQuestionsClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *question_image* updates
            if question_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                question_image.frameNStart = frameN  # exact frame index
                question_image.tStart = t  # local t and not account for scr refresh
                question_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(question_image, 'tStartRefresh')  # time at next scr refresh
                question_image.setAutoDraw(True)
            
            # *question_resp* updates
            waitOnFlip = False
            if question_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                question_resp.frameNStart = frameN  # exact frame index
                question_resp.tStart = t  # local t and not account for scr refresh
                question_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(question_resp, 'tStartRefresh')  # time at next scr refresh
                question_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(question_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(question_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if question_resp.status == STARTED and not waitOnFlip:
                theseKeys = question_resp.getKeys(keyList=['1', '2', '3', '4'], waitRelease=False)
                _question_resp_allKeys.extend(theseKeys)
                if len(_question_resp_allKeys):
                    question_resp.keys = _question_resp_allKeys[-1].name  # just the last key pressed
                    question_resp.rt = _question_resp_allKeys[-1].rt
                    # was this correct?
                    if (question_resp.keys == str(correct)) or (question_resp.keys == correct):
                        question_resp.corr = 1
                    else:
                        question_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in showQuestionsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "showQuestions"-------
        for thisComponent in showQuestionsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        questionsLoop.addData('question_image.started', question_image.tStartRefresh)
        questionsLoop.addData('question_image.stopped', question_image.tStopRefresh)
        # check responses
        if question_resp.keys in ['', [], None]:  # No response was made
            question_resp.keys = None
            # was no response the correct answer?!
            if str(correct).lower() == 'none':
               question_resp.corr = 1;  # correct non-response
            else:
               question_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for questionsLoop (TrialHandler)
        questionsLoop.addData('question_resp.keys',question_resp.keys)
        questionsLoop.addData('question_resp.corr', question_resp.corr)
        if question_resp.keys != None:  # we had a response
            questionsLoop.addData('question_resp.rt', question_resp.rt)
        questionsLoop.addData('question_resp.started', question_resp.tStartRefresh)
        questionsLoop.addData('question_resp.stopped', question_resp.tStopRefresh)
        # the Routine "showQuestions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'questionsLoop'
    
    
    # ------Prepare to start Routine "afterQuestions"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_5.setText(text_element)
    key_resp_5.keys = []
    key_resp_5.rt = []
    _key_resp_5_allKeys = []
    # keep track of which components have finished
    afterQuestionsComponents = [text_5, key_resp_5]
    for thisComponent in afterQuestionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    afterQuestionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "afterQuestions"-------
    while continueRoutine:
        # get current time
        t = afterQuestionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=afterQuestionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_5* updates
        if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            text_5.setAutoDraw(True)
        
        # *key_resp_5* updates
        waitOnFlip = False
        if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_5.frameNStart = frameN  # exact frame index
            key_resp_5.tStart = t  # local t and not account for scr refresh
            key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
            key_resp_5.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_5.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_5_allKeys.extend(theseKeys)
            if len(_key_resp_5_allKeys):
                key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in afterQuestionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "afterQuestions"-------
    for thisComponent in afterQuestionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('text_5.started', text_5.tStartRefresh)
    trials_2.addData('text_5.stopped', text_5.tStopRefresh)
    # check responses
    if key_resp_5.keys in ['', [], None]:  # No response was made
        key_resp_5.keys = None
    trials_2.addData('key_resp_5.keys',key_resp_5.keys)
    if key_resp_5.keys != None:  # we had a response
        trials_2.addData('key_resp_5.rt', key_resp_5.rt)
    # the Routine "afterQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "extraCode"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    extraCodeComponents = []
    for thisComponent in extraCodeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    extraCodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "extraCode"-------
    while continueRoutine:
        # get current time
        t = extraCodeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=extraCodeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in extraCodeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "extraCode"-------
    for thisComponent in extraCodeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    count = count + 1
    count_extra = count
    
    if count > 4:
        count = 4
    
    if count == 4:
        text_element = "Dette var den sidste historie, og eksperimentet er nu slut. \n\n Tak for din deltagelse! \n\n OM EKSPERIMENTET: \n Dette projekt tager udgangspunkt i læseværktøjet “Bionic Reading”, som er et værktøj, der på baggrund af en algoritme konvertere en tekst, så dele af ord i en tekst er fremhævet. Dette eksperiment er med til at undersøge, hvorvidt dette værktøj påvirker læsehastighed og læseforståelse. \n\n Tryk på mellemrumstasten for at afslutte eksperimentet. \n\n Vent venligst med at afslutte fuldsskærmsvisning, indtil beskeden på skærmen bekræfter, at data er gemt."
    
    this_condition = selected_condition[count]
    
    # the Routine "extraCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'trials_2'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
