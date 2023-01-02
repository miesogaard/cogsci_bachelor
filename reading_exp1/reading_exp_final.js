/************************** 
 * Reading_Exp_Final Test *
 **************************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'reading_exp_final';  // from the Builder filename that created this script
let expInfo = {'participant': 'please_write_random_letters_and_numbers_here', 'your_age': '', 'your_gender': 'Female, Male, Other'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initCodeRoutineBegin());
flowScheduler.add(initCodeRoutineEachFrame());
flowScheduler.add(initCodeRoutineEnd());
flowScheduler.add(firstWelcomeRoutineBegin());
flowScheduler.add(firstWelcomeRoutineEachFrame());
flowScheduler.add(firstWelcomeRoutineEnd());
flowScheduler.add(consentFormRoutineBegin());
flowScheduler.add(consentFormRoutineEachFrame());
flowScheduler.add(consentFormRoutineEnd());
flowScheduler.add(confirmationFormRoutineBegin());
flowScheduler.add(confirmationFormRoutineEachFrame());
flowScheduler.add(confirmationFormRoutineEnd());
flowScheduler.add(welcomeScreenRoutineBegin());
flowScheduler.add(welcomeScreenRoutineEachFrame());
flowScheduler.add(welcomeScreenRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/**destinati**on..png', 'path': 'resources/**destinati**on..png'},
    {'name': 'resources/became.png', 'path': 'resources/became.png'},
    {'name': 'resources/islands.png', 'path': 'resources/islands.png'},
    {'name': 'resources/hides.png', 'path': 'resources/hides.png'},
    {'name': 'resources/-Observing.png', 'path': 'resources/-Observing.png'},
    {'name': 'resources/**pedest**al,.png', 'path': 'resources/**pedest**al,.png'},
    {'name': 'resources/**someh**ow.png', 'path': 'resources/**someh**ow.png'},
    {'name': 'resources/**su**pport.png', 'path': 'resources/**su**pport.png'},
    {'name': 'resources/future.png', 'path': 'resources/future.png'},
    {'name': 'resources/hat.png', 'path': 'resources/hat.png'},
    {'name': 'resources/comings.png', 'path': 'resources/comings.png'},
    {'name': 'resources/story_1_q_3.png', 'path': 'resources/story_1_q_3.png'},
    {'name': 'resources/him.png', 'path': 'resources/him.png'},
    {'name': 'resources/-But.png', 'path': 'resources/-But.png'},
    {'name': 'resources/up.png', 'path': 'resources/up.png'},
    {'name': 'resources/**observ**ed.png', 'path': 'resources/**observ**ed.png'},
    {'name': 'resources/**fi**nally.png', 'path': 'resources/**fi**nally.png'},
    {'name': 'resources/looked.png', 'path': 'resources/looked.png'},
    {'name': 'resources/**neigh**ed.png', 'path': 'resources/**neigh**ed.png'},
    {'name': 'resources/**effecti**ve.png', 'path': 'resources/**effecti**ve.png'},
    {'name': 'resources/young.png', 'path': 'resources/young.png'},
    {'name': 'resources/**kilomete**rs.png', 'path': 'resources/**kilomete**rs.png'},
    {'name': 'resources/**wo**ndering.png', 'path': 'resources/**wo**ndering.png'},
    {'name': 'resources/**s**he.png', 'path': 'resources/**s**he.png'},
    {'name': 'resources/been.png', 'path': 'resources/been.png'},
    {'name': 'resources/story_3_hfhs.xlsx', 'path': 'resources/story_3_hfhs.xlsx'},
    {'name': 'resources/is.png', 'path': 'resources/is.png'},
    {'name': 'resources/**perfe**ct.png', 'path': 'resources/**perfe**ct.png'},
    {'name': 'resources/work,.png', 'path': 'resources/work,.png'},
    {'name': 'resources/**bad**ly.png', 'path': 'resources/**bad**ly.png'},
    {'name': 'resources/**spikey-hair**ed.png', 'path': 'resources/**spikey-hair**ed.png'},
    {'name': 'resources/crossed.png', 'path': 'resources/crossed.png'},
    {'name': 'resources/surreal..png', 'path': 'resources/surreal..png'},
    {'name': 'resources/**co**mings.png', 'path': 'resources/**co**mings.png'},
    {'name': 'resources/queen.png', 'path': 'resources/queen.png'},
    {'name': 'resources/**ca**tching.png', 'path': 'resources/**ca**tching.png'},
    {'name': 'resources/**w**ave..png', 'path': 'resources/**w**ave..png'},
    {'name': 'resources/**ob**served.png', 'path': 'resources/**ob**served.png'},
    {'name': 'resources/to.png', 'path': 'resources/to.png'},
    {'name': 'resources/wave..png', 'path': 'resources/wave..png'},
    {'name': 'resources/park..png', 'path': 'resources/park..png'},
    {'name': 'resources/**weekd**ay.png', 'path': 'resources/**weekd**ay.png'},
    {'name': 'resources/**ga**rden.png', 'path': 'resources/**ga**rden.png'},
    {'name': 'resources/-When.png', 'path': 'resources/-When.png'},
    {'name': 'resources/**no**w.png', 'path': 'resources/**no**w.png'},
    {'name': 'resources/dawn..png', 'path': 'resources/dawn..png'},
    {'name': 'resources/sky.png', 'path': 'resources/sky.png'},
    {'name': 'resources/**ta**sty.png', 'path': 'resources/**ta**sty.png'},
    {'name': 'resources/**use**d.png', 'path': 'resources/**use**d.png'},
    {'name': 'resources/**bu**shes.png', 'path': 'resources/**bu**shes.png'},
    {'name': 'resources/**look**ed.png', 'path': 'resources/**look**ed.png'},
    {'name': 'resources/**pa**nts.png', 'path': 'resources/**pa**nts.png'},
    {'name': 'resources/vigorously..png', 'path': 'resources/vigorously..png'},
    {'name': 'resources/**post**ed.png', 'path': 'resources/**post**ed.png'},
    {'name': 'resources/**fo**lding.png', 'path': 'resources/**fo**lding.png'},
    {'name': 'resources/**futu**re.png', 'path': 'resources/**futu**re.png'},
    {'name': 'resources/**fr**iendly.png', 'path': 'resources/**fr**iendly.png'},
    {'name': 'resources/downtown.png', 'path': 'resources/downtown.png'},
    {'name': 'resources/slopes.png', 'path': 'resources/slopes.png'},
    {'name': 'resources/watch.png', 'path': 'resources/watch.png'},
    {'name': 'resources/Justice.png', 'path': 'resources/Justice.png'},
    {'name': 'resources/minidress,.png', 'path': 'resources/minidress,.png'},
    {'name': 'resources/**mi**nidress,.png', 'path': 'resources/**mi**nidress,.png'},
    {'name': 'resources/story_5_q_4.png', 'path': 'resources/story_5_q_4.png'},
    {'name': 'resources/places,.png', 'path': 'resources/places,.png'},
    {'name': 'resources/**n**ot.png', 'path': 'resources/**n**ot.png'},
    {'name': 'resources/**pu**mps,.png', 'path': 'resources/**pu**mps,.png'},
    {'name': 'resources/**beau**ty.png', 'path': 'resources/**beau**ty.png'},
    {'name': 'resources/**rev**erently.png', 'path': 'resources/**rev**erently.png'},
    {'name': 'resources/catching.png', 'path': 'resources/catching.png'},
    {'name': 'resources/elderly.png', 'path': 'resources/elderly.png'},
    {'name': 'resources/**d**ays,.png', 'path': 'resources/**d**ays,.png'},
    {'name': 'resources/**slow-movi**ng.png', 'path': 'resources/**slow-movi**ng.png'},
    {'name': 'resources/**ne**utrals,.png', 'path': 'resources/**ne**utrals,.png'},
    {'name': 'resources/**sp**arkled.png', 'path': 'resources/**sp**arkled.png'},
    {'name': 'resources/**-Th**ese.png', 'path': 'resources/**-Th**ese.png'},
    {'name': 'resources/**lov**e.png', 'path': 'resources/**lov**e.png'},
    {'name': 'resources/club.png', 'path': 'resources/club.png'},
    {'name': 'resources/food.png', 'path': 'resources/food.png'},
    {'name': 'resources/**wa**rdrobe.png', 'path': 'resources/**wa**rdrobe.png'},
    {'name': 'resources/**ri**ghtful.png', 'path': 'resources/**ri**ghtful.png'},
    {'name': 'resources/story_3_lfhs.xlsx', 'path': 'resources/story_3_lfhs.xlsx'},
    {'name': 'resources/**do**g.png', 'path': 'resources/**do**g.png'},
    {'name': 'resources/**sh**e.png', 'path': 'resources/**sh**e.png'},
    {'name': 'resources/more.png', 'path': 'resources/more.png'},
    {'name': 'resources/**materi**al.png', 'path': 'resources/**materi**al.png'},
    {'name': 'resources/**me**ters.png', 'path': 'resources/**me**ters.png'},
    {'name': 'resources/**l**ove.png', 'path': 'resources/**l**ove.png'},
    {'name': 'resources/**fro**nt.png', 'path': 'resources/**fro**nt.png'},
    {'name': 'resources/**cl**oudless.png', 'path': 'resources/**cl**oudless.png'},
    {'name': 'resources/**L**ady.png', 'path': 'resources/**L**ady.png'},
    {'name': 'resources/still.png', 'path': 'resources/still.png'},
    {'name': 'resources/story_4_lfls.xlsx', 'path': 'resources/story_4_lfls.xlsx'},
    {'name': 'resources/**mo**rnings,.png', 'path': 'resources/**mo**rnings,.png'},
    {'name': 'resources/**remnan**ts.png', 'path': 'resources/**remnan**ts.png'},
    {'name': 'resources/co-workers.png', 'path': 'resources/co-workers.png'},
    {'name': 'resources/wished.png', 'path': 'resources/wished.png'},
    {'name': 'resources/story_2_lfls.xlsx', 'path': 'resources/story_2_lfls.xlsx'},
    {'name': 'resources/**tr**aded.png', 'path': 'resources/**tr**aded.png'},
    {'name': 'resources/**ey**e.png', 'path': 'resources/**ey**e.png'},
    {'name': 'resources/**su**real..png', 'path': 'resources/**su**real..png'},
    {'name': 'resources/**CD**s.png', 'path': 'resources/**CD**s.png'},
    {'name': 'resources/**appear**ed.png', 'path': 'resources/**appear**ed.png'},
    {'name': 'resources/**ha**s.png', 'path': 'resources/**ha**s.png'},
    {'name': 'resources/**m**esh.png', 'path': 'resources/**m**esh.png'},
    {'name': 'resources/**sl**oudless.png', 'path': 'resources/**sl**oudless.png'},
    {'name': 'resources/bushes,.png', 'path': 'resources/bushes,.png'},
    {'name': 'resources/story_1_q_1.png', 'path': 'resources/story_1_q_1.png'},
    {'name': 'resources/remained.png', 'path': 'resources/remained.png'},
    {'name': 'resources/**t**o.png', 'path': 'resources/**t**o.png'},
    {'name': 'resources/**ba**seball.png', 'path': 'resources/**ba**seball.png'},
    {'name': 'resources/**i**n.png', 'path': 'resources/**i**n.png'},
    {'name': 'resources/**hi**s.png', 'path': 'resources/**hi**s.png'},
    {'name': 'resources/**natu**re.png', 'path': 'resources/**natu**re.png'},
    {'name': 'resources/**hu**ndred.png', 'path': 'resources/**hu**ndred.png'},
    {'name': 'resources/**J**im.png', 'path': 'resources/**J**im.png'},
    {'name': 'resources/**qui**ntessential.png', 'path': 'resources/**qui**ntessential.png'},
    {'name': 'resources/**st**irred.png', 'path': 'resources/**st**irred.png'},
    {'name': 'resources/**-Batter**ed.png', 'path': 'resources/**-Batter**ed.png'},
    {'name': 'resources/**-Edi**th.png', 'path': 'resources/**-Edi**th.png'},
    {'name': 'resources/run.png', 'path': 'resources/run.png'},
    {'name': 'resources/and.png', 'path': 'resources/and.png'},
    {'name': 'resources/**w**ork,.png', 'path': 'resources/**w**ork,.png'},
    {'name': 'resources/**mil**d.png', 'path': 'resources/**mil**d.png'},
    {'name': 'resources/monolithic.png', 'path': 'resources/monolithic.png'},
    {'name': 'resources/their.png', 'path': 'resources/their.png'},
    {'name': 'resources/**sto**od.png', 'path': 'resources/**sto**od.png'},
    {'name': 'resources/queen..png', 'path': 'resources/queen..png'},
    {'name': 'resources/**w**ith.png', 'path': 'resources/**w**ith.png'},
    {'name': 'resources/**downto**wn.png', 'path': 'resources/**downto**wn.png'},
    {'name': 'resources/story_1_hfls.xlsx', 'path': 'resources/story_1_hfls.xlsx'},
    {'name': 'resources/**fluoresce**nt.png', 'path': 'resources/**fluoresce**nt.png'},
    {'name': 'resources/**nigh**ts.png', 'path': 'resources/**nigh**ts.png'},
    {'name': 'resources/**collect**ed.png', 'path': 'resources/**collect**ed.png'},
    {'name': 'resources/**froc**ks.png', 'path': 'resources/**froc**ks.png'},
    {'name': 'resources/**quintessenti**al.png', 'path': 'resources/**quintessenti**al.png'},
    {'name': 'resources/**regain**ed.png', 'path': 'resources/**regain**ed.png'},
    {'name': 'resources/posted.png', 'path': 'resources/posted.png'},
    {'name': 'resources/**vi**tamins.png', 'path': 'resources/**vi**tamins.png'},
    {'name': 'resources/**ho**use,.png', 'path': 'resources/**ho**use,.png'},
    {'name': 'resources/**i**t..png', 'path': 'resources/**i**t..png'},
    {'name': 'resources/vitamins.png', 'path': 'resources/vitamins.png'},
    {'name': 'resources/**craw**ling.png', 'path': 'resources/**craw**ling.png'},
    {'name': 'resources/**-B**ut.png', 'path': 'resources/**-B**ut.png'},
    {'name': 'resources/Lady.png', 'path': 'resources/Lady.png'},
    {'name': 'resources/spikey-haired.png', 'path': 'resources/spikey-haired.png'},
    {'name': 'resources/**be**ing.png', 'path': 'resources/**be**ing.png'},
    {'name': 'resources/**sometim**es.png', 'path': 'resources/**sometim**es.png'},
    {'name': 'resources/**draggi**ng.png', 'path': 'resources/**draggi**ng.png'},
    {'name': 'resources/**sun**ny.png', 'path': 'resources/**sun**ny.png'},
    {'name': 'resources/**st**ruck..png', 'path': 'resources/**st**ruck..png'},
    {'name': 'resources/used.png', 'path': 'resources/used.png'},
    {'name': 'resources/**armf**ul.png', 'path': 'resources/**armf**ul.png'},
    {'name': 'resources/**en**sure.png', 'path': 'resources/**en**sure.png'},
    {'name': 'resources/her..png', 'path': 'resources/her..png'},
    {'name': 'resources/clothes..png', 'path': 'resources/clothes..png'},
    {'name': 'resources/**tha**n.png', 'path': 'resources/**tha**n.png'},
    {'name': 'resources/stood.png', 'path': 'resources/stood.png'},
    {'name': 'resources/**f**lew.png', 'path': 'resources/**f**lew.png'},
    {'name': 'resources/**colorf**ul.png', 'path': 'resources/**colorf**ul.png'},
    {'name': 'resources/**offer**ed.png', 'path': 'resources/**offer**ed.png'},
    {'name': 'resources/**S**ea.png', 'path': 'resources/**S**ea.png'},
    {'name': 'resources/**ar**duous.png', 'path': 'resources/**ar**duous.png'},
    {'name': 'resources/**he**rself.png', 'path': 'resources/**he**rself.png'},
    {'name': 'resources/effective.png', 'path': 'resources/effective.png'},
    {'name': 'resources/**w**as.png', 'path': 'resources/**w**as.png'},
    {'name': 'resources/**a**nd.png', 'path': 'resources/**a**nd.png'},
    {'name': 'resources/**co**uple,.png', 'path': 'resources/**co**uple,.png'},
    {'name': 'resources/**sc**ent.png', 'path': 'resources/**sc**ent.png'},
    {'name': 'resources/**positi**on..png', 'path': 'resources/**positi**on..png'},
    {'name': 'resources/carefree.png', 'path': 'resources/carefree.png'},
    {'name': 'resources/knew.png', 'path': 'resources/knew.png'},
    {'name': 'resources/**u**sed.png', 'path': 'resources/**u**sed.png'},
    {'name': 'resources/hundred.png', 'path': 'resources/hundred.png'},
    {'name': 'resources/flew.png', 'path': 'resources/flew.png'},
    {'name': 'resources/**sk**y.png', 'path': 'resources/**sk**y.png'},
    {'name': 'resources/**re**mnants.png', 'path': 'resources/**re**mnants.png'},
    {'name': 'resources/**wor**k,.png', 'path': 'resources/**wor**k,.png'},
    {'name': 'resources/**ho**bble.png', 'path': 'resources/**ho**bble.png'},
    {'name': 'resources/**cl**othes..png', 'path': 'resources/**cl**othes..png'},
    {'name': 'resources/**wistf**ul.png', 'path': 'resources/**wistf**ul.png'},
    {'name': 'resources/**bee**n.png', 'path': 'resources/**bee**n.png'},
    {'name': 'resources/**fo**r.png', 'path': 'resources/**fo**r.png'},
    {'name': 'resources/**grateful**ly.png', 'path': 'resources/**grateful**ly.png'},
    {'name': 'resources/**sce**nt.png', 'path': 'resources/**sce**nt.png'},
    {'name': 'resources/Sea.png', 'path': 'resources/Sea.png'},
    {'name': 'resources/**b**een.png', 'path': 'resources/**b**een.png'},
    {'name': 'resources/through.png', 'path': 'resources/through.png'},
    {'name': 'resources/beauty.png', 'path': 'resources/beauty.png'},
    {'name': 'resources/**d**ay.png', 'path': 'resources/**d**ay.png'},
    {'name': 'resources/fluorescent.png', 'path': 'resources/fluorescent.png'},
    {'name': 'resources/**tr**ade.png', 'path': 'resources/**tr**ade.png'},
    {'name': 'resources/**sw**ord.png', 'path': 'resources/**sw**ord.png'},
    {'name': 'resources/**-Th**e.png', 'path': 'resources/**-Th**e.png'},
    {'name': 'resources/noticed.png', 'path': 'resources/noticed.png'},
    {'name': 'resources/further,.png', 'path': 'resources/further,.png'},
    {'name': 'resources/**d**ust.png', 'path': 'resources/**d**ust.png'},
    {'name': 'resources/children.png', 'path': 'resources/children.png'},
    {'name': 'resources/remnants.png', 'path': 'resources/remnants.png'},
    {'name': 'resources/**t**hat.png', 'path': 'resources/**t**hat.png'},
    {'name': 'resources/**thru**st.png', 'path': 'resources/**thru**st.png'},
    {'name': 'resources/tall.png', 'path': 'resources/tall.png'},
    {'name': 'resources/**de**licious.png', 'path': 'resources/**de**licious.png'},
    {'name': 'resources/**re**gained.png', 'path': 'resources/**re**gained.png'},
    {'name': 'resources/**neutra**ls,.png', 'path': 'resources/**neutra**ls,.png'},
    {'name': 'resources/**be**aten.png', 'path': 'resources/**be**aten.png'},
    {'name': 'resources/**fu**ture.png', 'path': 'resources/**fu**ture.png'},
    {'name': 'resources/**minera**ls..png', 'path': 'resources/**minera**ls..png'},
    {'name': 'resources/lair,.png', 'path': 'resources/lair,.png'},
    {'name': 'resources/**o**ff.png', 'path': 'resources/**o**ff.png'},
    {'name': 'resources/**boulde**rs,.png', 'path': 'resources/**boulde**rs,.png'},
    {'name': 'resources/hobble.png', 'path': 'resources/hobble.png'},
    {'name': 'resources/matching.png', 'path': 'resources/matching.png'},
    {'name': 'resources/**su**nny.png', 'path': 'resources/**su**nny.png'},
    {'name': 'resources/**gard**en.png', 'path': 'resources/**gard**en.png'},
    {'name': 'resources/**m**ild.png', 'path': 'resources/**m**ild.png'},
    {'name': 'resources/**Frid**ay.png', 'path': 'resources/**Frid**ay.png'},
    {'name': 'resources/silky.png', 'path': 'resources/silky.png'},
    {'name': 'resources/day.png', 'path': 'resources/day.png'},
    {'name': 'resources/weekday.png', 'path': 'resources/weekday.png'},
    {'name': 'resources/if.png', 'path': 'resources/if.png'},
    {'name': 'resources/story_5_lfhs.xlsx', 'path': 'resources/story_5_lfhs.xlsx'},
    {'name': 'resources/sunny.png', 'path': 'resources/sunny.png'},
    {'name': 'resources/**dis**gruntled.png', 'path': 'resources/**dis**gruntled.png'},
    {'name': 'resources/eyes.png', 'path': 'resources/eyes.png'},
    {'name': 'resources/**Aege**an.png', 'path': 'resources/**Aege**an.png'},
    {'name': 'resources/from.png', 'path': 'resources/from.png'},
    {'name': 'resources/**scal**es.png', 'path': 'resources/**scal**es.png'},
    {'name': 'resources/**daw**n..png', 'path': 'resources/**daw**n..png'},
    {'name': 'resources/**-W**hen.png', 'path': 'resources/**-W**hen.png'},
    {'name': 'resources/**m**ade.png', 'path': 'resources/**m**ade.png'},
    {'name': 'resources/story_4_hfhs.xlsx', 'path': 'resources/story_4_hfhs.xlsx'},
    {'name': 'resources/**gra**ss..png', 'path': 'resources/**gra**ss..png'},
    {'name': 'resources/**Edi**th.png', 'path': 'resources/**Edi**th.png'},
    {'name': 'resources/**-H**er.png', 'path': 'resources/**-H**er.png'},
    {'name': 'resources/**col**or.png', 'path': 'resources/**col**or.png'},
    {'name': 'resources/**qu**een.png', 'path': 'resources/**qu**een.png'},
    {'name': 'resources/**ap**peared.png', 'path': 'resources/**ap**peared.png'},
    {'name': 'resources/**ei**ghties.png', 'path': 'resources/**ei**ghties.png'},
    {'name': 'resources/**yo**ung.png', 'path': 'resources/**yo**ung.png'},
    {'name': 'resources/**goin**gs.png', 'path': 'resources/**goin**gs.png'},
    {'name': 'resources/**h**e.png', 'path': 'resources/**h**e.png'},
    {'name': 'resources/**goi**ng.png', 'path': 'resources/**goi**ng.png'},
    {'name': 'resources/make.png', 'path': 'resources/make.png'},
    {'name': 'resources/old.png', 'path': 'resources/old.png'},
    {'name': 'resources/what.png', 'path': 'resources/what.png'},
    {'name': 'resources/stumbled.png', 'path': 'resources/stumbled.png'},
    {'name': 'resources/-The.png', 'path': 'resources/-The.png'},
    {'name': 'resources/frocks.png', 'path': 'resources/frocks.png'},
    {'name': 'resources/house.png', 'path': 'resources/house.png'},
    {'name': 'resources/**catchi**ng.png', 'path': 'resources/**catchi**ng.png'},
    {'name': 'resources/gown,.png', 'path': 'resources/gown,.png'},
    {'name': 'resources/crawling.png', 'path': 'resources/crawling.png'},
    {'name': 'resources/**herse**lf.png', 'path': 'resources/**herse**lf.png'},
    {'name': 'resources/**ni**ghts.png', 'path': 'resources/**ni**ghts.png'},
    {'name': 'resources/**walke**rs.png', 'path': 'resources/**walke**rs.png'},
    {'name': 'resources/**mad**e.png', 'path': 'resources/**mad**e.png'},
    {'name': 'resources/stepped.png', 'path': 'resources/stepped.png'},
    {'name': 'resources/quintessential.png', 'path': 'resources/quintessential.png'},
    {'name': 'resources/baseball.png', 'path': 'resources/baseball.png'},
    {'name': 'resources/**bangl**es.png', 'path': 'resources/**bangl**es.png'},
    {'name': 'resources/**w**hen.png', 'path': 'resources/**w**hen.png'},
    {'name': 'resources/it.png', 'path': 'resources/it.png'},
    {'name': 'resources/story_2_hfhs.xlsx', 'path': 'resources/story_2_hfhs.xlsx'},
    {'name': 'resources/**disgruntl**ed.png', 'path': 'resources/**disgruntl**ed.png'},
    {'name': 'resources/ships,.png', 'path': 'resources/ships,.png'},
    {'name': 'resources/**Berk**ah.png', 'path': 'resources/**Berk**ah.png'},
    {'name': 'resources/**que**en.png', 'path': 'resources/**que**en.png'},
    {'name': 'resources/wondering.png', 'path': 'resources/wondering.png'},
    {'name': 'resources/**tw**o.png', 'path': 'resources/**tw**o.png'},
    {'name': 'resources/**arduo**us.png', 'path': 'resources/**arduo**us.png'},
    {'name': 'resources/**si**gns.png', 'path': 'resources/**si**gns.png'},
    {'name': 'resources/days,.png', 'path': 'resources/days,.png'},
    {'name': 'resources/story_5_hfls.xlsx', 'path': 'resources/story_5_hfls.xlsx'},
    {'name': 'resources/-Anyone.png', 'path': 'resources/-Anyone.png'},
    {'name': 'resources/**s**it.png', 'path': 'resources/**s**it.png'},
    {'name': 'resources/folding.png', 'path': 'resources/folding.png'},
    {'name': 'resources/signs.png', 'path': 'resources/signs.png'},
    {'name': 'resources/tasty.png', 'path': 'resources/tasty.png'},
    {'name': 'resources/**-The**y.png', 'path': 'resources/**-The**y.png'},
    {'name': 'resources/scales.png', 'path': 'resources/scales.png'},
    {'name': 'resources/story_5_hfhs.xlsx', 'path': 'resources/story_5_hfhs.xlsx'},
    {'name': 'resources/**tal**l.png', 'path': 'resources/**tal**l.png'},
    {'name': 'resources/**er**ect.png', 'path': 'resources/**er**ect.png'},
    {'name': 'resources/**aw**ake.png', 'path': 'resources/**aw**ake.png'},
    {'name': 'resources/story_2_q_1.png', 'path': 'resources/story_2_q_1.png'},
    {'name': 'resources/neutrals,.png', 'path': 'resources/neutrals,.png'},
    {'name': 'resources/**kne**w.png', 'path': 'resources/**kne**w.png'},
    {'name': 'resources/**foo**d.png', 'path': 'resources/**foo**d.png'},
    {'name': 'resources/story_5_q_3.png', 'path': 'resources/story_5_q_3.png'},
    {'name': 'resources/**h**er..png', 'path': 'resources/**h**er..png'},
    {'name': 'resources/**beat**en.png', 'path': 'resources/**beat**en.png'},
    {'name': 'resources/**mo**ther..png', 'path': 'resources/**mo**ther..png'},
    {'name': 'resources/**d**ays.png', 'path': 'resources/**d**ays.png'},
    {'name': 'resources/**arriv**ed.png', 'path': 'resources/**arriv**ed.png'},
    {'name': 'resources/**bright**er.png', 'path': 'resources/**bright**er.png'},
    {'name': 'resources/**bre**athless..png', 'path': 'resources/**bre**athless..png'},
    {'name': 'resources/jagged.png', 'path': 'resources/jagged.png'},
    {'name': 'resources/**com**bination.png', 'path': 'resources/**com**bination.png'},
    {'name': 'resources/**tas**ty.png', 'path': 'resources/**tas**ty.png'},
    {'name': 'resources/**g**irl.png', 'path': 'resources/**g**irl.png'},
    {'name': 'resources/rain.png', 'path': 'resources/rain.png'},
    {'name': 'resources/**co**uld.png', 'path': 'resources/**co**uld.png'},
    {'name': 'resources/nature.png', 'path': 'resources/nature.png'},
    {'name': 'resources/**baseba**ll.png', 'path': 'resources/**baseba**ll.png'},
    {'name': 'resources/**cha**ir..png', 'path': 'resources/**cha**ir..png'},
    {'name': 'resources/withdrew.png', 'path': 'resources/withdrew.png'},
    {'name': 'resources/**mounta**in,.png', 'path': 'resources/**mounta**in,.png'},
    {'name': 'resources/observed.png', 'path': 'resources/observed.png'},
    {'name': 'resources/**Fr**iday.png', 'path': 'resources/**Fr**iday.png'},
    {'name': 'resources/**wo**uld.png', 'path': 'resources/**wo**uld.png'},
    {'name': 'resources/**Lad**y.png', 'path': 'resources/**Lad**y.png'},
    {'name': 'resources/**crui**se.png', 'path': 'resources/**crui**se.png'},
    {'name': 'resources/**mo**rning,.png', 'path': 'resources/**mo**rning,.png'},
    {'name': 'resources/nights.png', 'path': 'resources/nights.png'},
    {'name': 'resources/**islan**ds.png', 'path': 'resources/**islan**ds.png'},
    {'name': 'resources/sparkled.png', 'path': 'resources/sparkled.png'},
    {'name': 'resources/**mo**untain,.png', 'path': 'resources/**mo**untain,.png'},
    {'name': 'resources/**h**and.png', 'path': 'resources/**h**and.png'},
    {'name': 'resources/**determin**ed..png', 'path': 'resources/**determin**ed..png'},
    {'name': 'resources/**c**are.png', 'path': 'resources/**c**are.png'},
    {'name': 'resources/bruised,.png', 'path': 'resources/bruised,.png'},
    {'name': 'resources/carefree..png', 'path': 'resources/carefree..png'},
    {'name': 'resources/**childr**en.png', 'path': 'resources/**childr**en.png'},
    {'name': 'resources/**ha**d.png', 'path': 'resources/**ha**d.png'},
    {'name': 'resources/regained.png', 'path': 'resources/regained.png'},
    {'name': 'resources/**advan**ce.png', 'path': 'resources/**advan**ce.png'},
    {'name': 'resources/**h**im.png', 'path': 'resources/**h**im.png'},
    {'name': 'resources/**overnig**ht.png', 'path': 'resources/**overnig**ht.png'},
    {'name': 'resources/story_3_control.xlsx', 'path': 'resources/story_3_control.xlsx'},
    {'name': 'resources/-Berkah.png', 'path': 'resources/-Berkah.png'},
    {'name': 'resources/**bo**rrowed.png', 'path': 'resources/**bo**rrowed.png'},
    {'name': 'resources/**of**f.png', 'path': 'resources/**of**f.png'},
    {'name': 'resources/breeze..png', 'path': 'resources/breeze..png'},
    {'name': 'resources/**day**s.png', 'path': 'resources/**day**s.png'},
    {'name': 'resources/friendly.png', 'path': 'resources/friendly.png'},
    {'name': 'resources/-They.png', 'path': 'resources/-They.png'},
    {'name': 'resources/offered.png', 'path': 'resources/offered.png'},
    {'name': 'resources/right.png', 'path': 'resources/right.png'},
    {'name': 'resources/cruise.png', 'path': 'resources/cruise.png'},
    {'name': 'resources/**hou**se,.png', 'path': 'resources/**hou**se,.png'},
    {'name': 'resources/**hosti**ng.png', 'path': 'resources/**hosti**ng.png'},
    {'name': 'resources/**han**d.png', 'path': 'resources/**han**d.png'},
    {'name': 'resources/**bu**t.png', 'path': 'resources/**bu**t.png'},
    {'name': 'resources/**eighti**es.png', 'path': 'resources/**eighti**es.png'},
    {'name': 'resources/**delicio**us.png', 'path': 'resources/**delicio**us.png'},
    {'name': 'resources/tank,.png', 'path': 'resources/tank,.png'},
    {'name': 'resources/**re**bel.png', 'path': 'resources/**re**bel.png'},
    {'name': 'resources/has.png', 'path': 'resources/has.png'},
    {'name': 'resources/**c**oat.png', 'path': 'resources/**c**oat.png'},
    {'name': 'resources/**t**wo.png', 'path': 'resources/**t**wo.png'},
    {'name': 'resources/destination..png', 'path': 'resources/destination..png'},
    {'name': 'resources/pumps,.png', 'path': 'resources/pumps,.png'},
    {'name': 'resources/**i**nto.png', 'path': 'resources/**i**nto.png'},
    {'name': 'resources/**n**ow.png', 'path': 'resources/**n**ow.png'},
    {'name': 'resources/reached.png', 'path': 'resources/reached.png'},
    {'name': 'resources/**wi**shed.png', 'path': 'resources/**wi**shed.png'},
    {'name': 'resources/**si**lky.png', 'path': 'resources/**si**lky.png'},
    {'name': 'resources/borrowed.png', 'path': 'resources/borrowed.png'},
    {'name': 'resources/**wi**stful.png', 'path': 'resources/**wi**stful.png'},
    {'name': 'resources/**l**eft..png', 'path': 'resources/**l**eft..png'},
    {'name': 'resources/**-Ob**serving.png', 'path': 'resources/**-Ob**serving.png'},
    {'name': 'resources/**ri**ght.png', 'path': 'resources/**ri**ght.png'},
    {'name': 'resources/**eve**rything.png', 'path': 'resources/**eve**rything.png'},
    {'name': 'resources/beneath.png', 'path': 'resources/beneath.png'},
    {'name': 'resources/**ef**fective.png', 'path': 'resources/**ef**fective.png'},
    {'name': 'resources/rightful.png', 'path': 'resources/rightful.png'},
    {'name': 'resources/volcanic.png', 'path': 'resources/volcanic.png'},
    {'name': 'resources/**co-worke**rs.png', 'path': 'resources/**co-worke**rs.png'},
    {'name': 'resources/**ol**d.png', 'path': 'resources/**ol**d.png'},
    {'name': 'resources/**slop**es.png', 'path': 'resources/**slop**es.png'},
    {'name': 'resources/**le**ather.png', 'path': 'resources/**le**ather.png'},
    {'name': 'resources/**ov**ernight.png', 'path': 'resources/**ov**ernight.png'},
    {'name': 'resources/**wou**ld.png', 'path': 'resources/**wou**ld.png'},
    {'name': 'resources/story_3_q_4.png', 'path': 'resources/story_3_q_4.png'},
    {'name': 'resources/now.png', 'path': 'resources/now.png'},
    {'name': 'resources/people.png', 'path': 'resources/people.png'},
    {'name': 'resources/**blu**e.png', 'path': 'resources/**blu**e.png'},
    {'name': 'resources/**st**epped.png', 'path': 'resources/**st**epped.png'},
    {'name': 'resources/**w**hat.png', 'path': 'resources/**w**hat.png'},
    {'name': 'resources/**fle**w.png', 'path': 'resources/**fle**w.png'},
    {'name': 'resources/**m**ore.png', 'path': 'resources/**m**ore.png'},
    {'name': 'resources/story_4_hfls.xlsx', 'path': 'resources/story_4_hfls.xlsx'},
    {'name': 'resources/morning,.png', 'path': 'resources/morning,.png'},
    {'name': 'resources/**shi**ps,.png', 'path': 'resources/**shi**ps,.png'},
    {'name': 'resources/**master**s.png', 'path': 'resources/**master**s.png'},
    {'name': 'resources/**sti**ll.png', 'path': 'resources/**sti**ll.png'},
    {'name': 'resources/**volcan**ic.png', 'path': 'resources/**volcan**ic.png'},
    {'name': 'resources/shocking-pink.png', 'path': 'resources/shocking-pink.png'},
    {'name': 'resources/**ja**gged.png', 'path': 'resources/**ja**gged.png'},
    {'name': 'resources/odour..png', 'path': 'resources/odour..png'},
    {'name': 'resources/story_4_q_4.png', 'path': 'resources/story_4_q_4.png'},
    {'name': 'resources/**foldi**ng.png', 'path': 'resources/**foldi**ng.png'},
    {'name': 'resources/**ere**ct.png', 'path': 'resources/**ere**ct.png'},
    {'name': 'resources/**ch**air..png', 'path': 'resources/**ch**air..png'},
    {'name': 'resources/last.png', 'path': 'resources/last.png'},
    {'name': 'resources/traded.png', 'path': 'resources/traded.png'},
    {'name': 'resources/**carefr**ee..png', 'path': 'resources/**carefr**ee..png'},
    {'name': 'resources/-He.png', 'path': 'resources/-He.png'},
    {'name': 'resources/**Ju**stice.png', 'path': 'resources/**Ju**stice.png'},
    {'name': 'resources/**vo**lcanic.png', 'path': 'resources/**vo**lcanic.png'},
    {'name': 'resources/**dan**ce.png', 'path': 'resources/**dan**ce.png'},
    {'name': 'resources/**rea**ch.png', 'path': 'resources/**rea**ch.png'},
    {'name': 'resources/**tha**t.png', 'path': 'resources/**tha**t.png'},
    {'name': 'resources/-These.png', 'path': 'resources/-These.png'},
    {'name': 'resources/beaten.png', 'path': 'resources/beaten.png'},
    {'name': 'resources/ensure.png', 'path': 'resources/ensure.png'},
    {'name': 'resources/**lef**t..png', 'path': 'resources/**lef**t..png'},
    {'name': 'resources/locked.png', 'path': 'resources/locked.png'},
    {'name': 'resources/coat.png', 'path': 'resources/coat.png'},
    {'name': 'resources/**p**ark..png', 'path': 'resources/**p**ark..png'},
    {'name': 'resources/eye.png', 'path': 'resources/eye.png'},
    {'name': 'resources/**th**rough.png', 'path': 'resources/**th**rough.png'},
    {'name': 'resources/**gra**tefully.png', 'path': 'resources/**gra**tefully.png'},
    {'name': 'resources/story_4_q_3.png', 'path': 'resources/story_4_q_3.png'},
    {'name': 'resources/**ma**tching.png', 'path': 'resources/**ma**tching.png'},
    {'name': 'resources/**st**rong.png', 'path': 'resources/**st**rong.png'},
    {'name': 'resources/mesh.png', 'path': 'resources/mesh.png'},
    {'name': 'resources/slippery.png', 'path': 'resources/slippery.png'},
    {'name': 'resources/too,.png', 'path': 'resources/too,.png'},
    {'name': 'resources/**th**eir.png', 'path': 'resources/**th**eir.png'},
    {'name': 'resources/high..png', 'path': 'resources/high..png'},
    {'name': 'resources/**of**fered.png', 'path': 'resources/**of**fered.png'},
    {'name': 'resources/**spi**key-haired.png', 'path': 'resources/**spi**key-haired.png'},
    {'name': 'resources/mane.png', 'path': 'resources/mane.png'},
    {'name': 'resources/**-T**hey.png', 'path': 'resources/**-T**hey.png'},
    {'name': 'resources/that.png', 'path': 'resources/that.png'},
    {'name': 'resources/busy.png', 'path': 'resources/busy.png'},
    {'name': 'resources/grass..png', 'path': 'resources/grass..png'},
    {'name': 'resources/**198**4..png', 'path': 'resources/**198**4..png'},
    {'name': 'resources/**vig**orously..png', 'path': 'resources/**vig**orously..png'},
    {'name': 'resources/**th**e.png', 'path': 'resources/**th**e.png'},
    {'name': 'resources/swept.png', 'path': 'resources/swept.png'},
    {'name': 'resources/**t**op,.png', 'path': 'resources/**t**op,.png'},
    {'name': 'resources/**mak**e.png', 'path': 'resources/**mak**e.png'},
    {'name': 'resources/**lo**oked.png', 'path': 'resources/**lo**oked.png'},
    {'name': 'resources/**da**y.png', 'path': 'resources/**da**y.png'},
    {'name': 'resources/her.png', 'path': 'resources/her.png'},
    {'name': 'resources/**fr**esh.png', 'path': 'resources/**fr**esh.png'},
    {'name': 'resources/**suppo**rt.png', 'path': 'resources/**suppo**rt.png'},
    {'name': 'resources/**wa**lkers.png', 'path': 'resources/**wa**lkers.png'},
    {'name': 'resources/ready.png', 'path': 'resources/ready.png'},
    {'name': 'resources/**do**tted.png', 'path': 'resources/**do**tted.png'},
    {'name': 'resources/minerals..png', 'path': 'resources/minerals..png'},
    {'name': 'resources/story_5_lfls.xlsx', 'path': 'resources/story_5_lfls.xlsx'},
    {'name': 'resources/**-Anyo**ne.png', 'path': 'resources/**-Anyo**ne.png'},
    {'name': 'resources/dance.png', 'path': 'resources/dance.png'},
    {'name': 'resources/**wa**nted.png', 'path': 'resources/**wa**nted.png'},
    {'name': 'resources/couple,.png', 'path': 'resources/couple,.png'},
    {'name': 'resources/the.png', 'path': 'resources/the.png'},
    {'name': 'resources/reach.png', 'path': 'resources/reach.png'},
    {'name': 'resources/-Her.png', 'path': 'resources/-Her.png'},
    {'name': 'resources/**be**auty.png', 'path': 'resources/**be**auty.png'},
    {'name': 'resources/**dus**t.png', 'path': 'resources/**dus**t.png'},
    {'name': 'resources/**od**our..png', 'path': 'resources/**od**our..png'},
    {'name': 'resources/**-Be**rkah.png', 'path': 'resources/**-Be**rkah.png'},
    {'name': 'resources/**monolith**ic.png', 'path': 'resources/**monolith**ic.png'},
    {'name': 'resources/**stumbl**ed.png', 'path': 'resources/**stumbl**ed.png'},
    {'name': 'resources/**st**ill.png', 'path': 'resources/**st**ill.png'},
    {'name': 'resources/**the**ir.png', 'path': 'resources/**the**ir.png'},
    {'name': 'resources/scent.png', 'path': 'resources/scent.png'},
    {'name': 'resources/story_3_lfls.xlsx', 'path': 'resources/story_3_lfls.xlsx'},
    {'name': 'resources/position..png', 'path': 'resources/position..png'},
    {'name': 'resources/**t**rek.png', 'path': 'resources/**t**rek.png'},
    {'name': 'resources/he.png', 'path': 'resources/he.png'},
    {'name': 'resources/somehow.png', 'path': 'resources/somehow.png'},
    {'name': 'resources/**ca**refree..png', 'path': 'resources/**ca**refree..png'},
    {'name': 'resources/**pas**t.png', 'path': 'resources/**pas**t.png'},
    {'name': 'resources/**stru**ck..png', 'path': 'resources/**stru**ck..png'},
    {'name': 'resources/**h**ad.png', 'path': 'resources/**h**ad.png'},
    {'name': 'resources/**withdr**ew.png', 'path': 'resources/**withdr**ew.png'},
    {'name': 'resources/on.png', 'path': 'resources/on.png'},
    {'name': 'resources/**tre**k.png', 'path': 'resources/**tre**k.png'},
    {'name': 'resources/**bo**rowed.png', 'path': 'resources/**bo**rowed.png'},
    {'name': 'resources/**st**anding.png', 'path': 'resources/**st**anding.png'},
    {'name': 'resources/overnight.png', 'path': 'resources/overnight.png'},
    {'name': 'resources/into.png', 'path': 'resources/into.png'},
    {'name': 'resources/**sparkl**ed.png', 'path': 'resources/**sparkl**ed.png'},
    {'name': 'resources/**-Bu**t.png', 'path': 'resources/**-Bu**t.png'},
    {'name': 'resources/**dr**agging.png', 'path': 'resources/**dr**agging.png'},
    {'name': 'resources/dressing.png', 'path': 'resources/dressing.png'},
    {'name': 'resources/**styli**sh,.png', 'path': 'resources/**styli**sh,.png'},
    {'name': 'resources/**sil**ky.png', 'path': 'resources/**sil**ky.png'},
    {'name': 'resources/**moth**er..png', 'path': 'resources/**moth**er..png'},
    {'name': 'resources/**he**r.png', 'path': 'resources/**he**r.png'},
    {'name': 'resources/**Warni**ng.png', 'path': 'resources/**Warni**ng.png'},
    {'name': 'resources/**re**ach.png', 'path': 'resources/**re**ach.png'},
    {'name': 'resources/**-Aft**er.png', 'path': 'resources/**-Aft**er.png'},
    {'name': 'resources/rebel.png', 'path': 'resources/rebel.png'},
    {'name': 'resources/**w**ell.png', 'path': 'resources/**w**ell.png'},
    {'name': 'resources/until.png', 'path': 'resources/until.png'},
    {'name': 'resources/love.png', 'path': 'resources/love.png'},
    {'name': 'resources/**neon-yell**ow.png', 'path': 'resources/**neon-yell**ow.png'},
    {'name': 'resources/wardrobe.png', 'path': 'resources/wardrobe.png'},
    {'name': 'resources/**m**ane.png', 'path': 'resources/**m**ane.png'},
    {'name': 'resources/**e**yes.png', 'path': 'resources/**e**yes.png'},
    {'name': 'resources/**cr**ossed.png', 'path': 'resources/**cr**ossed.png'},
    {'name': 'resources/**crawli**ng.png', 'path': 'resources/**crawli**ng.png'},
    {'name': 'resources/front.png', 'path': 'resources/front.png'},
    {'name': 'resources/top,.png', 'path': 'resources/top,.png'},
    {'name': 'resources/**matchi**ng.png', 'path': 'resources/**matchi**ng.png'},
    {'name': 'resources/**-Ba**ttered.png', 'path': 'resources/**-Ba**ttered.png'},
    {'name': 'resources/**un**til.png', 'path': 'resources/**un**til.png'},
    {'name': 'resources/**grou**nd.png', 'path': 'resources/**grou**nd.png'},
    {'name': 'resources/awake.png', 'path': 'resources/awake.png'},
    {'name': 'resources/**surviv**or.png', 'path': 'resources/**surviv**or.png'},
    {'name': 'resources/**setermin**ed.png', 'path': 'resources/**setermin**ed.png'},
    {'name': 'resources/story_4_lfhs.xlsx', 'path': 'resources/story_4_lfhs.xlsx'},
    {'name': 'resources/paths.png', 'path': 'resources/paths.png'},
    {'name': 'resources/**tan**k,.png', 'path': 'resources/**tan**k,.png'},
    {'name': 'resources/**wel**l.png', 'path': 'resources/**wel**l.png'},
    {'name': 'resources/**h**is.png', 'path': 'resources/**h**is.png'},
    {'name': 'resources/**h**er.png', 'path': 'resources/**h**er.png'},
    {'name': 'resources/**slippe**ry.png', 'path': 'resources/**slippe**ry.png'},
    {'name': 'resources/**sto**ne.png', 'path': 'resources/**sto**ne.png'},
    {'name': 'resources/than.png', 'path': 'resources/than.png'},
    {'name': 'resources/woken.png', 'path': 'resources/woken.png'},
    {'name': 'resources/1984..png', 'path': 'resources/1984..png'},
    {'name': 'resources/at.png', 'path': 'resources/at.png'},
    {'name': 'resources/**l**eft.png', 'path': 'resources/**l**eft.png'},
    {'name': 'resources/left.png', 'path': 'resources/left.png'},
    {'name': 'resources/**-Observi**ng.png', 'path': 'resources/**-Observi**ng.png'},
    {'name': 'resources/**for**t..png', 'path': 'resources/**for**t..png'},
    {'name': 'resources/**co-**workers.png', 'path': 'resources/**co-**workers.png'},
    {'name': 'resources/**pat**hs.png', 'path': 'resources/**pat**hs.png'},
    {'name': 'resources/but.png', 'path': 'resources/but.png'},
    {'name': 'resources/**t**ank,.png', 'path': 'resources/**t**ank,.png'},
    {'name': 'resources/**hobb**le.png', 'path': 'resources/**hobb**le.png'},
    {'name': 'resources/**su**rvivor.png', 'path': 'resources/**su**rvivor.png'},
    {'name': 'resources/**man**e.png', 'path': 'resources/**man**e.png'},
    {'name': 'resources/**rea**dy.png', 'path': 'resources/**rea**dy.png'},
    {'name': 'resources/along.png', 'path': 'resources/along.png'},
    {'name': 'resources/badly.png', 'path': 'resources/badly.png'},
    {'name': 'resources/blue.png', 'path': 'resources/blue.png'},
    {'name': 'resources/combination.png', 'path': 'resources/combination.png'},
    {'name': 'resources/would.png', 'path': 'resources/would.png'},
    {'name': 'resources/fort..png', 'path': 'resources/fort..png'},
    {'name': 'resources/**b**lue.png', 'path': 'resources/**b**lue.png'},
    {'name': 'resources/**ar**rived.png', 'path': 'resources/**ar**rived.png'},
    {'name': 'resources/**pan**ts.png', 'path': 'resources/**pan**ts.png'},
    {'name': 'resources/**swo**rd.png', 'path': 'resources/**swo**rd.png'},
    {'name': 'resources/**alo**ng.png', 'path': 'resources/**alo**ng.png'},
    {'name': 'resources/**fr**ont.png', 'path': 'resources/**fr**ont.png'},
    {'name': 'resources/**si**t.png', 'path': 'resources/**si**t.png'},
    {'name': 'resources/**hi**des.png', 'path': 'resources/**hi**des.png'},
    {'name': 'resources/**h**air.png', 'path': 'resources/**h**air.png'},
    {'name': 'resources/**mes**h.png', 'path': 'resources/**mes**h.png'},
    {'name': 'resources/morning.png', 'path': 'resources/morning.png'},
    {'name': 'resources/**le**aving.png', 'path': 'resources/**le**aving.png'},
    {'name': 'resources/4,.png', 'path': 'resources/4,.png'},
    {'name': 'resources/herself.png', 'path': 'resources/herself.png'},
    {'name': 'resources/**st**ood.png', 'path': 'resources/**st**ood.png'},
    {'name': 'resources/days.png', 'path': 'resources/days.png'},
    {'name': 'resources/**i**s.png', 'path': 'resources/**i**s.png'},
    {'name': 'resources/**no**ticed.png', 'path': 'resources/**no**ticed.png'},
    {'name': 'resources/**st**one.png', 'path': 'resources/**st**one.png'},
    {'name': 'resources/**wok**en.png', 'path': 'resources/**wok**en.png'},
    {'name': 'resources/**a**.png', 'path': 'resources/**a**.png'},
    {'name': 'resources/**d**awn..png', 'path': 'resources/**d**awn..png'},
    {'name': 'resources/dust.png', 'path': 'resources/dust.png'},
    {'name': 'resources/**awa**ke.png', 'path': 'resources/**awa**ke.png'},
    {'name': 'resources/**wa**s.png', 'path': 'resources/**wa**s.png'},
    {'name': 'resources/care.png', 'path': 'resources/care.png'},
    {'name': 'resources/could.png', 'path': 'resources/could.png'},
    {'name': 'resources/even.png', 'path': 'resources/even.png'},
    {'name': 'resources/woman.png', 'path': 'resources/woman.png'},
    {'name': 'resources/mountain,.png', 'path': 'resources/mountain,.png'},
    {'name': 'resources/**wo**man.png', 'path': 'resources/**wo**man.png'},
    {'name': 'resources/**su**mmit.png', 'path': 'resources/**su**mmit.png'},
    {'name': 'resources/**scloudle**ss.png', 'path': 'resources/**scloudle**ss.png'},
    {'name': 'resources/**t**he.png', 'path': 'resources/**t**he.png'},
    {'name': 'resources/**go**ing.png', 'path': 'resources/**go**ing.png'},
    {'name': 'resources/**-S**he.png', 'path': 'resources/**-S**he.png'},
    {'name': 'resources/**dr**essing.png', 'path': 'resources/**dr**essing.png'},
    {'name': 'resources/**t**han.png', 'path': 'resources/**t**han.png'},
    {'name': 'resources/armful.png', 'path': 'resources/armful.png'},
    {'name': 'resources/Jim.png', 'path': 'resources/Jim.png'},
    {'name': 'resources/story_2_hfls.xlsx', 'path': 'resources/story_2_hfls.xlsx'},
    {'name': 'resources/color.png', 'path': 'resources/color.png'},
    {'name': 'resources/**-Af**ter.png', 'path': 'resources/**-Af**ter.png'},
    {'name': 'resources/down.png', 'path': 'resources/down.png'},
    {'name': 'resources/**be**neath.png', 'path': 'resources/**be**neath.png'},
    {'name': 'resources/hair.png', 'path': 'resources/hair.png'},
    {'name': 'resources/collected.png', 'path': 'resources/collected.png'},
    {'name': 'resources/-After.png', 'path': 'resources/-After.png'},
    {'name': 'resources/sword.png', 'path': 'resources/sword.png'},
    {'name': 'resources/**he**ading.png', 'path': 'resources/**he**ading.png'},
    {'name': 'resources/eighties.png', 'path': 'resources/eighties.png'},
    {'name': 'resources/masters.png', 'path': 'resources/masters.png'},
    {'name': 'resources/**to**p,.png', 'path': 'resources/**to**p,.png'},
    {'name': 'resources/**co**lorful.png', 'path': 'resources/**co**lorful.png'},
    {'name': 'resources/**ha**t.png', 'path': 'resources/**ha**t.png'},
    {'name': 'resources/**pe**destal,.png', 'path': 'resources/**pe**destal,.png'},
    {'name': 'resources/**trad**ed.png', 'path': 'resources/**trad**ed.png'},
    {'name': 'resources/**kil**ometers.png', 'path': 'resources/**kil**ometers.png'},
    {'name': 'resources/**bree**ze..png', 'path': 'resources/**bree**ze..png'},
    {'name': 'resources/**stunn**ed..png', 'path': 'resources/**stunn**ed..png'},
    {'name': 'resources/**-He**r.png', 'path': 'resources/**-He**r.png'},
    {'name': 'resources/neighed.png', 'path': 'resources/neighed.png'},
    {'name': 'resources/she.png', 'path': 'resources/she.png'},
    {'name': 'resources/mild.png', 'path': 'resources/mild.png'},
    {'name': 'resources/**f**or.png', 'path': 'resources/**f**or.png'},
    {'name': 'resources/**be**came.png', 'path': 'resources/**be**came.png'},
    {'name': 'resources/head.png', 'path': 'resources/head.png'},
    {'name': 'resources/**swe**pt.png', 'path': 'resources/**swe**pt.png'},
    {'name': 'resources/**re**ady.png', 'path': 'resources/**re**ady.png'},
    {'name': 'resources/-Battered.png', 'path': 'resources/-Battered.png'},
    {'name': 'resources/**wom**an.png', 'path': 'resources/**wom**an.png'},
    {'name': 'resources/story_2_q_4.png', 'path': 'resources/story_2_q_4.png'},
    {'name': 'resources/**elder**ly.png', 'path': 'resources/**elder**ly.png'},
    {'name': 'resources/**ch**ildren.png', 'path': 'resources/**ch**ildren.png'},
    {'name': 'resources/**clu**b.png', 'path': 'resources/**clu**b.png'},
    {'name': 'resources/**everyo**ne.png', 'path': 'resources/**everyo**ne.png'},
    {'name': 'resources/**b**ut.png', 'path': 'resources/**b**ut.png'},
    {'name': 'resources/**whe**n.png', 'path': 'resources/**whe**n.png'},
    {'name': 'resources/fresh.png', 'path': 'resources/fresh.png'},
    {'name': 'resources/his.png', 'path': 'resources/his.png'},
    {'name': 'resources/standing.png', 'path': 'resources/standing.png'},
    {'name': 'resources/stunned..png', 'path': 'resources/stunned..png'},
    {'name': 'resources/**reverent**ly.png', 'path': 'resources/**reverent**ly.png'},
    {'name': 'resources/raise.png', 'path': 'resources/raise.png'},
    {'name': 'resources/everything.png', 'path': 'resources/everything.png'},
    {'name': 'resources/**eve**n.png', 'path': 'resources/**eve**n.png'},
    {'name': 'resources/**st**unned..png', 'path': 'resources/**st**unned..png'},
    {'name': 'resources/**odo**ur..png', 'path': 'resources/**odo**ur..png'},
    {'name': 'resources/**scho**ol.png', 'path': 'resources/**scho**ol.png'},
    {'name': 'resources/**1**984..png', 'path': 'resources/**1**984..png'},
    {'name': 'resources/dog.png', 'path': 'resources/dog.png'},
    {'name': 'resources/**a**s.png', 'path': 'resources/**a**s.png'},
    {'name': 'resources/**ru**n.png', 'path': 'resources/**ru**n.png'},
    {'name': 'resources/**wa**tch.png', 'path': 'resources/**wa**tch.png'},
    {'name': 'resources/dragging.png', 'path': 'resources/dragging.png'},
    {'name': 'resources/off.png', 'path': 'resources/off.png'},
    {'name': 'resources/**sl**ippery.png', 'path': 'resources/**sl**ippery.png'},
    {'name': 'resources/**a**t.png', 'path': 'resources/**a**t.png'},
    {'name': 'resources/struck..png', 'path': 'resources/struck..png'},
    {'name': 'resources/**neo**n-yellow.png', 'path': 'resources/**neo**n-yellow.png'},
    {'name': 'resources/**t**hey.png', 'path': 'resources/**t**hey.png'},
    {'name': 'resources/**throu**gh.png', 'path': 'resources/**throu**gh.png'},
    {'name': 'resources/**sc**hool.png', 'path': 'resources/**sc**hool.png'},
    {'name': 'resources/finally.png', 'path': 'resources/finally.png'},
    {'name': 'resources/**fro**m.png', 'path': 'resources/**fro**m.png'},
    {'name': 'resources/**notic**ed.png', 'path': 'resources/**notic**ed.png'},
    {'name': 'resources/**dis**infectant.png', 'path': 'resources/**dis**infectant.png'},
    {'name': 'resources/everyone.png', 'path': 'resources/everyone.png'},
    {'name': 'resources/**bus**y.png', 'path': 'resources/**bus**y.png'},
    {'name': 'resources/**day**s,.png', 'path': 'resources/**day**s,.png'},
    {'name': 'resources/**gr**ass..png', 'path': 'resources/**gr**ass..png'},
    {'name': 'resources/**remain**ed.png', 'path': 'resources/**remain**ed.png'},
    {'name': 'resources/**borrow**ed.png', 'path': 'resources/**borrow**ed.png'},
    {'name': 'resources/an.png', 'path': 'resources/an.png'},
    {'name': 'resources/**d**own.png', 'path': 'resources/**d**own.png'},
    {'name': 'resources/a.png', 'path': 'resources/a.png'},
    {'name': 'resources/disgruntled.png', 'path': 'resources/disgruntled.png'},
    {'name': 'resources/**want**ed.png', 'path': 'resources/**want**ed.png'},
    {'name': 'resources/story_1_q_4.png', 'path': 'resources/story_1_q_4.png'},
    {'name': 'resources/story_1_hfhs.xlsx', 'path': 'resources/story_1_hfhs.xlsx'},
    {'name': 'resources/story_5_control.xlsx', 'path': 'resources/story_5_control.xlsx'},
    {'name': 'resources/**Ae**gean.png', 'path': 'resources/**Ae**gean.png'},
    {'name': 'resources/**e**ven.png', 'path': 'resources/**e**ven.png'},
    {'name': 'resources/ground.png', 'path': 'resources/ground.png'},
    {'name': 'resources/condition_1.xlsx', 'path': 'resources/condition_1.xlsx'},
    {'name': 'resources/**hai**r.png', 'path': 'resources/**hai**r.png'},
    {'name': 'resources/**wo**rking.png', 'path': 'resources/**wo**rking.png'},
    {'name': 'resources/**a**n.png', 'path': 'resources/**a**n.png'},
    {'name': 'resources/hand.png', 'path': 'resources/hand.png'},
    {'name': 'resources/**stro**ng.png', 'path': 'resources/**stro**ng.png'},
    {'name': 'resources/made.png', 'path': 'resources/made.png'},
    {'name': 'resources/**-Berk**ah.png', 'path': 'resources/**-Berk**ah.png'},
    {'name': 'resources/**gow**n,.png', 'path': 'resources/**gow**n,.png'},
    {'name': 'resources/story_1_lfhs.xlsx', 'path': 'resources/story_1_lfhs.xlsx'},
    {'name': 'resources/**we**ekday.png', 'path': 'resources/**we**ekday.png'},
    {'name': 'resources/stylish,.png', 'path': 'resources/stylish,.png'},
    {'name': 'resources/**Wa**rning.png', 'path': 'resources/**Wa**rning.png'},
    {'name': 'resources/**plac**es,.png', 'path': 'resources/**plac**es,.png'},
    {'name': 'resources/Friday.png', 'path': 'resources/Friday.png'},
    {'name': 'resources/**t**oo,.png', 'path': 'resources/**t**oo,.png'},
    {'name': 'resources/Aegean.png', 'path': 'resources/Aegean.png'},
    {'name': 'resources/**bu**shes,.png', 'path': 'resources/**bu**shes,.png'},
    {'name': 'resources/**co**llected.png', 'path': 'resources/**co**llected.png'},
    {'name': 'resources/**pl**aces,.png', 'path': 'resources/**pl**aces,.png'},
    {'name': 'resources/**st**ylish,.png', 'path': 'resources/**st**ylish,.png'},
    {'name': 'resources/delicious.png', 'path': 'resources/delicious.png'},
    {'name': 'resources/**cou**ld.png', 'path': 'resources/**cou**ld.png'},
    {'name': 'resources/**su**rreal..png', 'path': 'resources/**su**rreal..png'},
    {'name': 'resources/working.png', 'path': 'resources/working.png'},
    {'name': 'resources/wanted.png', 'path': 'resources/wanted.png'},
    {'name': 'resources/**bi**g.png', 'path': 'resources/**bi**g.png'},
    {'name': 'resources/**Ba**ttered.png', 'path': 'resources/**Ba**ttered.png'},
    {'name': 'resources/of.png', 'path': 'resources/of.png'},
    {'name': 'resources/**par**k..png', 'path': 'resources/**par**k..png'},
    {'name': 'resources/as.png', 'path': 'resources/as.png'},
    {'name': 'resources/story_3_q_2.png', 'path': 'resources/story_3_q_2.png'},
    {'name': 'resources/**you**ng.png', 'path': 'resources/**you**ng.png'},
    {'name': 'resources/**car**e.png', 'path': 'resources/**car**e.png'},
    {'name': 'resources/**the**y.png', 'path': 'resources/**the**y.png'},
    {'name': 'resources/material.png', 'path': 'resources/material.png'},
    {'name': 'resources/**bush**es,.png', 'path': 'resources/**bush**es,.png'},
    {'name': 'resources/**i**f.png', 'path': 'resources/**i**f.png'},
    {'name': 'resources/**wonderi**ng.png', 'path': 'resources/**wonderi**ng.png'},
    {'name': 'resources/**al**ong.png', 'path': 'resources/**al**ong.png'},
    {'name': 'resources/school.png', 'path': 'resources/school.png'},
    {'name': 'resources/**i**t.png', 'path': 'resources/**i**t.png'},
    {'name': 'resources/**ensu**re.png', 'path': 'resources/**ensu**re.png'},
    {'name': 'resources/**reach**ed.png', 'path': 'resources/**reach**ed.png'},
    {'name': 'resources/**coup**le,.png', 'path': 'resources/**coup**le,.png'},
    {'name': 'resources/**breathle**ss..png', 'path': 'resources/**breathle**ss..png'},
    {'name': 'resources/well.png', 'path': 'resources/well.png'},
    {'name': 'resources/heading.png', 'path': 'resources/heading.png'},
    {'name': 'resources/**comin**gs.png', 'path': 'resources/**comin**gs.png'},
    {'name': 'resources/**-Whe**n.png', 'path': 'resources/**-Whe**n.png'},
    {'name': 'resources/**sig**ns.png', 'path': 'resources/**sig**ns.png'},
    {'name': 'resources/**mete**rs.png', 'path': 'resources/**mete**rs.png'},
    {'name': 'resources/**combinati**on.png', 'path': 'resources/**combinati**on.png'},
    {'name': 'resources/**peop**le.png', 'path': 'resources/**peop**le.png'},
    {'name': 'resources/**t**oo.png', 'path': 'resources/**t**oo.png'},
    {'name': 'resources/**mon**olithic.png', 'path': 'resources/**mon**olithic.png'},
    {'name': 'resources/**h**at.png', 'path': 'resources/**h**at.png'},
    {'name': 'resources/leather.png', 'path': 'resources/leather.png'},
    {'name': 'resources/**hea**d.png', 'path': 'resources/**hea**d.png'},
    {'name': 'resources/reverently.png', 'path': 'resources/reverently.png'},
    {'name': 'resources/story_4_control.xlsx', 'path': 'resources/story_4_control.xlsx'},
    {'name': 'resources/**mi**nidress.png', 'path': 'resources/**mi**nidress.png'},
    {'name': 'resources/**u**p.png', 'path': 'resources/**u**p.png'},
    {'name': 'resources/**br**uised,.png', 'path': 'resources/**br**uised,.png'},
    {'name': 'resources/**4**,.png', 'path': 'resources/**4**,.png'},
    {'name': 'resources/**-T**he.png', 'path': 'resources/**-T**he.png'},
    {'name': 'resources/**no**t.png', 'path': 'resources/**no**t.png'},
    {'name': 'resources/**headi**ng.png', 'path': 'resources/**headi**ng.png'},
    {'name': 'resources/**r**un.png', 'path': 'resources/**r**un.png'},
    {'name': 'resources/**o**ld.png', 'path': 'resources/**o**ld.png'},
    {'name': 'resources/CDs.png', 'path': 'resources/CDs.png'},
    {'name': 'resources/**wha**t.png', 'path': 'resources/**wha**t.png'},
    {'name': 'resources/**wish**ed.png', 'path': 'resources/**wish**ed.png'},
    {'name': 'resources/pedestal,.png', 'path': 'resources/pedestal,.png'},
    {'name': 'resources/**d**og.png', 'path': 'resources/**d**og.png'},
    {'name': 'resources/trade.png', 'path': 'resources/trade.png'},
    {'name': 'resources/dotted.png', 'path': 'resources/dotted.png'},
    {'name': 'resources/erect.png', 'path': 'resources/erect.png'},
    {'name': 'resources/**ho**sting.png', 'path': 'resources/**ho**sting.png'},
    {'name': 'resources/**int**o.png', 'path': 'resources/**int**o.png'},
    {'name': 'resources/**sh**ips,.png', 'path': 'resources/**sh**ips,.png'},
    {'name': 'resources/**longi**ng.png', 'path': 'resources/**longi**ng.png'},
    {'name': 'resources/**wat**ch.png', 'path': 'resources/**wat**ch.png'},
    {'name': 'resources/past.png', 'path': 'resources/past.png'},
    {'name': 'resources/**cr**awling.png', 'path': 'resources/**cr**awling.png'},
    {'name': 'resources/story_4_q_1.png', 'path': 'resources/story_4_q_1.png'},
    {'name': 'resources/walkers.png', 'path': 'resources/walkers.png'},
    {'name': 'resources/**b**ig.png', 'path': 'resources/**b**ig.png'},
    {'name': 'resources/disinfectant.png', 'path': 'resources/disinfectant.png'},
    {'name': 'resources/house,.png', 'path': 'resources/house,.png'},
    {'name': 'resources/**pr**oudly.png', 'path': 'resources/**pr**oudly.png'},
    {'name': 'resources/**e**ye.png', 'path': 'resources/**e**ye.png'},
    {'name': 'resources/**r**ain.png', 'path': 'resources/**r**ain.png'},
    {'name': 'resources/**ra**ise.png', 'path': 'resources/**ra**ise.png'},
    {'name': 'resources/**g**own,.png', 'path': 'resources/**g**own,.png'},
    {'name': 'resources/**k**new.png', 'path': 'resources/**k**new.png'},
    {'name': 'resources/gratefully.png', 'path': 'resources/gratefully.png'},
    {'name': 'resources/kilometers.png', 'path': 'resources/kilometers.png'},
    {'name': 'resources/mother..png', 'path': 'resources/mother..png'},
    {'name': 'resources/story_1_lfls.xlsx', 'path': 'resources/story_1_lfls.xlsx'},
    {'name': 'resources/wistful.png', 'path': 'resources/wistful.png'},
    {'name': 'resources/**hundr**ed.png', 'path': 'resources/**hundr**ed.png'},
    {'name': 'resources/appeared.png', 'path': 'resources/appeared.png'},
    {'name': 'resources/stone.png', 'path': 'resources/stone.png'},
    {'name': 'resources/story_1_control.xlsx', 'path': 'resources/story_1_control.xlsx'},
    {'name': 'resources/story_2_q_3.png', 'path': 'resources/story_2_q_3.png'},
    {'name': 'resources/story_3_q_1.png', 'path': 'resources/story_3_q_1.png'},
    {'name': 'resources/it..png', 'path': 'resources/it..png'},
    {'name': 'resources/story_2_control.xlsx', 'path': 'resources/story_2_control.xlsx'},
    {'name': 'resources/**bo**ulders,.png', 'path': 'resources/**bo**ulders,.png'},
    {'name': 'resources/story_2_q_2.png', 'path': 'resources/story_2_q_2.png'},
    {'name': 'resources/story_5_q_1.png', 'path': 'resources/story_5_q_1.png'},
    {'name': 'resources/survivor.png', 'path': 'resources/survivor.png'},
    {'name': 'resources/**na**ture.png', 'path': 'resources/**na**ture.png'},
    {'name': 'resources/determined..png', 'path': 'resources/determined..png'},
    {'name': 'resources/**minidre**ss,.png', 'path': 'resources/**minidre**ss,.png'},
    {'name': 'resources/**Se**a.png', 'path': 'resources/**Se**a.png'},
    {'name': 'resources/**s**ky.png', 'path': 'resources/**s**ky.png'},
    {'name': 'resources/**leath**er.png', 'path': 'resources/**leath**er.png'},
    {'name': 'resources/**stepp**ed.png', 'path': 'resources/**stepp**ed.png'},
    {'name': 'resources/**everythi**ng.png', 'path': 'resources/**everythi**ng.png'},
    {'name': 'resources/**ca**refree.png', 'path': 'resources/**ca**refree.png'},
    {'name': 'resources/**p**ast.png', 'path': 'resources/**p**ast.png'},
    {'name': 'resources/girl.png', 'path': 'resources/girl.png'},
    {'name': 'resources/**benea**th.png', 'path': 'resources/**benea**th.png'},
    {'name': 'resources/**furth**er,.png', 'path': 'resources/**furth**er,.png'},
    {'name': 'resources/**vitami**ns.png', 'path': 'resources/**vitami**ns.png'},
    {'name': 'resources/**morni**ng,.png', 'path': 'resources/**morni**ng,.png'},
    {'name': 'resources/**-The**se.png', 'path': 'resources/**-The**se.png'},
    {'name': 'resources/story_1_q_2.png', 'path': 'resources/story_1_q_2.png'},
    {'name': 'resources/**leavi**ng.png', 'path': 'resources/**leavi**ng.png'},
    {'name': 'resources/**ba**dly.png', 'path': 'resources/**ba**dly.png'},
    {'name': 'resources/Warning.png', 'path': 'resources/Warning.png'},
    {'name': 'resources/leaving.png', 'path': 'resources/leaving.png'},
    {'name': 'resources/being.png', 'path': 'resources/being.png'},
    {'name': 'resources/**el**derly.png', 'path': 'resources/**el**derly.png'},
    {'name': 'resources/**lo**cked.png', 'path': 'resources/**lo**cked.png'},
    {'name': 'resources/**sw**ept.png', 'path': 'resources/**sw**ept.png'},
    {'name': 'resources/**det**ermined..png', 'path': 'resources/**det**ermined..png'},
    {'name': 'resources/**gir**l.png', 'path': 'resources/**gir**l.png'},
    {'name': 'resources/**pum**ps,.png', 'path': 'resources/**pum**ps,.png'},
    {'name': 'resources/Edith.png', 'path': 'resources/Edith.png'},
    {'name': 'resources/**po**sition..png', 'path': 'resources/**po**sition..png'},
    {'name': 'resources/**mornin**gs,.png', 'path': 'resources/**mornin**gs,.png'},
    {'name': 'resources/**reb**el.png', 'path': 'resources/**reb**el.png'},
    {'name': 'resources/surreal.png', 'path': 'resources/surreal.png'},
    {'name': 'resources/thrust.png', 'path': 'resources/thrust.png'},
    {'name': 'resources/**-Sh**e.png', 'path': 'resources/**-Sh**e.png'},
    {'name': 'resources/**hig**h..png', 'path': 'resources/**hig**h..png'},
    {'name': 'resources/brighter.png', 'path': 'resources/brighter.png'},
    {'name': 'resources/**to**o,.png', 'path': 'resources/**to**o,.png'},
    {'name': 'resources/**br**ighter.png', 'path': 'resources/**br**ighter.png'},
    {'name': 'resources/**h**igh..png', 'path': 'resources/**h**igh..png'},
    {'name': 'resources/**wo**ken.png', 'path': 'resources/**wo**ken.png'},
    {'name': 'resources/sometimes.png', 'path': 'resources/sometimes.png'},
    {'name': 'resources/**f**ood.png', 'path': 'resources/**f**ood.png'},
    {'name': 'resources/**lo**nging.png', 'path': 'resources/**lo**nging.png'},
    {'name': 'resources/with.png', 'path': 'resources/with.png'},
    {'name': 'resources/**-H**e.png', 'path': 'resources/**-H**e.png'},
    {'name': 'resources/**cloth**es..png', 'path': 'resources/**cloth**es..png'},
    {'name': 'resources/**he**r..png', 'path': 'resources/**he**r..png'},
    {'name': 'resources/**ne**ighed.png', 'path': 'resources/**ne**ighed.png'},
    {'name': 'resources/stirred.png', 'path': 'resources/stirred.png'},
    {'name': 'resources/-She.png', 'path': 'resources/-She.png'},
    {'name': 'resources/**pe**ople.png', 'path': 'resources/**pe**ople.png'},
    {'name': 'resources/**cloudle**ss.png', 'path': 'resources/**cloudle**ss.png'},
    {'name': 'resources/goings.png', 'path': 'resources/goings.png'},
    {'name': 'resources/trek.png', 'path': 'resources/trek.png'},
    {'name': 'resources/when.png', 'path': 'resources/when.png'},
    {'name': 'resources/in.png', 'path': 'resources/in.png'},
    {'name': 'resources/**unt**il.png', 'path': 'resources/**unt**il.png'},
    {'name': 'resources/**stirr**ed.png', 'path': 'resources/**stirr**ed.png'},
    {'name': 'resources/**l**ast.png', 'path': 'resources/**l**ast.png'},
    {'name': 'resources/**Ji**m.png', 'path': 'resources/**Ji**m.png'},
    {'name': 'resources/**pa**ths.png', 'path': 'resources/**pa**ths.png'},
    {'name': 'resources/neon-yellow.png', 'path': 'resources/neon-yellow.png'},
    {'name': 'resources/**fr**ocks.png', 'path': 'resources/**fr**ocks.png'},
    {'name': 'resources/**standi**ng.png', 'path': 'resources/**standi**ng.png'},
    {'name': 'resources/**fre**sh.png', 'path': 'resources/**fre**sh.png'},
    {'name': 'resources/**o**f.png', 'path': 'resources/**o**f.png'},
    {'name': 'resources/**sl**opes.png', 'path': 'resources/**sl**opes.png'},
    {'name': 'resources/story_2_lfhs.xlsx', 'path': 'resources/story_2_lfhs.xlsx'},
    {'name': 'resources/**Justi**ce.png', 'path': 'resources/**Justi**ce.png'},
    {'name': 'resources/**sc**ales.png', 'path': 'resources/**sc**ales.png'},
    {'name': 'resources/story_5_q_2.png', 'path': 'resources/story_5_q_2.png'},
    {'name': 'resources/**ba**ngles.png', 'path': 'resources/**ba**ngles.png'},
    {'name': 'resources/**fu**rther,.png', 'path': 'resources/**fu**rther,.png'},
    {'name': 'resources/**rai**se.png', 'path': 'resources/**rai**se.png'},
    {'name': 'resources/had.png', 'path': 'resources/had.png'},
    {'name': 'resources/**bei**ng.png', 'path': 'resources/**bei**ng.png'},
    {'name': 'resources/**friend**ly.png', 'path': 'resources/**friend**ly.png'},
    {'name': 'resources/**so**mehow.png', 'path': 'resources/**so**mehow.png'},
    {'name': 'resources/**re**mained.png', 'path': 'resources/**re**mained.png'},
    {'name': 'resources/**ar**mful.png', 'path': 'resources/**ar**mful.png'},
    {'name': 'resources/**dott**ed.png', 'path': 'resources/**dott**ed.png'},
    {'name': 'resources/**jagg**ed.png', 'path': 'resources/**jagg**ed.png'},
    {'name': 'resources/**br**eeze..png', 'path': 'resources/**br**eeze..png'},
    {'name': 'resources/**Ed**ith.png', 'path': 'resources/**Ed**ith.png'},
    {'name': 'resources/**cross**ed.png', 'path': 'resources/**cross**ed.png'},
    {'name': 'resources/**hi**m.png', 'path': 'resources/**hi**m.png'},
    {'name': 'resources/-On.png', 'path': 'resources/-On.png'},
    {'name': 'resources/pants.png', 'path': 'resources/pants.png'},
    {'name': 'resources/**beca**me.png', 'path': 'resources/**beca**me.png'},
    {'name': 'resources/perfect.png', 'path': 'resources/perfect.png'},
    {'name': 'resources/**worki**ng.png', 'path': 'resources/**worki**ng.png'},
    {'name': 'resources/bangles.png', 'path': 'resources/bangles.png'},
    {'name': 'resources/story_3_hfls.xlsx', 'path': 'resources/story_3_hfls.xlsx'},
    {'name': 'resources/**mor**e.png', 'path': 'resources/**mor**e.png'},
    {'name': 'resources/**dressi**ng.png', 'path': 'resources/**dressi**ng.png'},
    {'name': 'resources/**surre**al..png', 'path': 'resources/**surre**al..png'},
    {'name': 'resources/**las**t.png', 'path': 'resources/**las**t.png'},
    {'name': 'resources/story_4_q_2.png', 'path': 'resources/story_4_q_2.png'},
    {'name': 'resources/two.png', 'path': 'resources/two.png'},
    {'name': 'resources/**f**rom.png', 'path': 'resources/**f**rom.png'},
    {'name': 'resources/**lock**ed.png', 'path': 'resources/**lock**ed.png'},
    {'name': 'resources/**po**sted.png', 'path': 'resources/**po**sted.png'},
    {'name': 'resources/going.png', 'path': 'resources/going.png'},
    {'name': 'resources/**an**d.png', 'path': 'resources/**an**d.png'},
    {'name': 'resources/strong.png', 'path': 'resources/strong.png'},
    {'name': 'resources/**h**ead.png', 'path': 'resources/**h**ead.png'},
    {'name': 'resources/**go**ings.png', 'path': 'resources/**go**ings.png'},
    {'name': 'resources/**cr**uise.png', 'path': 'resources/**cr**uise.png'},
    {'name': 'resources/arduous.png', 'path': 'resources/arduous.png'},
    {'name': 'resources/**wit**h.png', 'path': 'resources/**wit**h.png'},
    {'name': 'resources/left..png', 'path': 'resources/left..png'},
    {'name': 'resources/they.png', 'path': 'resources/they.png'},
    {'name': 'resources/big.png', 'path': 'resources/big.png'},
    {'name': 'resources/colorful.png', 'path': 'resources/colorful.png'},
    {'name': 'resources/**coa**t.png', 'path': 'resources/**coa**t.png'},
    {'name': 'resources/mornings,.png', 'path': 'resources/mornings,.png'},
    {'name': 'resources/**rig**ht.png', 'path': 'resources/**rig**ht.png'},
    {'name': 'resources/**vigorous**ly..png', 'path': 'resources/**vigorous**ly..png'},
    {'name': 'resources/**wav**e..png', 'path': 'resources/**wav**e..png'},
    {'name': 'resources/**lai**r,.png', 'path': 'resources/**lai**r,.png'},
    {'name': 'resources/**wi**thdrew.png', 'path': 'resources/**wi**thdrew.png'},
    {'name': 'resources/cloudless.png', 'path': 'resources/cloudless.png'},
    {'name': 'resources/**final**ly.png', 'path': 'resources/**final**ly.png'},
    {'name': 'resources/**wardro**be.png', 'path': 'resources/**wardro**be.png'},
    {'name': 'resources/longing.png', 'path': 'resources/longing.png'},
    {'name': 'resources/chair..png', 'path': 'resources/chair..png'},
    {'name': 'resources/meters.png', 'path': 'resources/meters.png'},
    {'name': 'resources/**sh**ips.png', 'path': 'resources/**sh**ips.png'},
    {'name': 'resources/**f**ort..png', 'path': 'resources/**f**ort..png'},
    {'name': 'resources/**C**Ds.png', 'path': 'resources/**C**Ds.png'},
    {'name': 'resources/**determin**ed.png', 'path': 'resources/**determin**ed.png'},
    {'name': 'resources/**c**lub.png', 'path': 'resources/**c**lub.png'},
    {'name': 'resources/advance.png', 'path': 'resources/advance.png'},
    {'name': 'resources/boulders,.png', 'path': 'resources/boulders,.png'},
    {'name': 'resources/**hid**es.png', 'path': 'resources/**hid**es.png'},
    {'name': 'resources/**slo**w-moving.png', 'path': 'resources/**slo**w-moving.png'},
    {'name': 'resources/slow-moving.png', 'path': 'resources/slow-moving.png'},
    {'name': 'resources/**ma**sters.png', 'path': 'resources/**ma**sters.png'},
    {'name': 'resources/**dow**n.png', 'path': 'resources/**dow**n.png'},
    {'name': 'resources/**qu**een..png', 'path': 'resources/**qu**een..png'},
    {'name': 'resources/**bruis**ed,.png', 'path': 'resources/**bruis**ed,.png'},
    {'name': 'resources/not.png', 'path': 'resources/not.png'},
    {'name': 'resources/**des**tination..png', 'path': 'resources/**des**tination..png'},
    {'name': 'resources/**b**usy.png', 'path': 'resources/**b**usy.png'},
    {'name': 'resources/**th**rust.png', 'path': 'resources/**th**rust.png'},
    {'name': 'resources/was.png', 'path': 'resources/was.png'},
    {'name': 'resources/support.png', 'path': 'resources/support.png'},
    {'name': 'resources/**da**nce.png', 'path': 'resources/**da**nce.png'},
    {'name': 'resources/**eye**s.png', 'path': 'resources/**eye**s.png'},
    {'name': 'resources/**pe**rfect.png', 'path': 'resources/**pe**rfect.png'},
    {'name': 'resources/**rai**n.png', 'path': 'resources/**rai**n.png'},
    {'name': 'resources/**ad**vance.png', 'path': 'resources/**ad**vance.png'},
    {'name': 'resources/**summ**it.png', 'path': 'resources/**summ**it.png'},
    {'name': 'resources/**so**metimes.png', 'path': 'resources/**so**metimes.png'},
    {'name': 'resources/**st**umbled.png', 'path': 'resources/**st**umbled.png'},
    {'name': 'resources/sit.png', 'path': 'resources/sit.png'},
    {'name': 'resources/**flu**orescent.png', 'path': 'resources/**flu**orescent.png'},
    {'name': 'resources/breathless..png', 'path': 'resources/breathless..png'},
    {'name': 'resources/**que**en..png', 'path': 'resources/**que**en..png'},
    {'name': 'resources/**mi**nerals..png', 'path': 'resources/**mi**nerals..png'},
    {'name': 'resources/**tra**de.png', 'path': 'resources/**tra**de.png'},
    {'name': 'resources/for.png', 'path': 'resources/for.png'},
    {'name': 'resources/**h**as.png', 'path': 'resources/**h**as.png'},
    {'name': 'resources/**m**ake.png', 'path': 'resources/**m**ake.png'},
    {'name': 'resources/**rightf**ul.png', 'path': 'resources/**rightf**ul.png'},
    {'name': 'resources/**-An**yone.png', 'path': 'resources/**-An**yone.png'},
    {'name': 'resources/**-O**n.png', 'path': 'resources/**-O**n.png'},
    {'name': 'resources/**ma**terial.png', 'path': 'resources/**ma**terial.png'},
    {'name': 'resources/**l**air,.png', 'path': 'resources/**l**air,.png'},
    {'name': 'resources/**co**lor.png', 'path': 'resources/**co**lor.png'},
    {'name': 'resources/**to**o.png', 'path': 'resources/**to**o.png'},
    {'name': 'resources/proudly.png', 'path': 'resources/proudly.png'},
    {'name': 'resources/too.png', 'path': 'resources/too.png'},
    {'name': 'resources/**shocking-pi**nk.png', 'path': 'resources/**shocking-pi**nk.png'},
    {'name': 'resources/**proud**ly.png', 'path': 'resources/**proud**ly.png'},
    {'name': 'resources/**lef**t.png', 'path': 'resources/**lef**t.png'},
    {'name': 'resources/**o**n.png', 'path': 'resources/**o**n.png'},
    {'name': 'resources/**sho**cking-pink.png', 'path': 'resources/**sho**cking-pink.png'},
    {'name': 'resources/**re**ached.png', 'path': 'resources/**re**ached.png'},
    {'name': 'resources/hosting.png', 'path': 'resources/hosting.png'},
    {'name': 'resources/**do**wntown.png', 'path': 'resources/**do**wntown.png'},
    {'name': 'resources/**is**lands.png', 'path': 'resources/**is**lands.png'},
    {'name': 'resources/story_3_q_3.png', 'path': 'resources/story_3_q_3.png'},
    {'name': 'resources/**gr**ound.png', 'path': 'resources/**gr**ound.png'},
    {'name': 'resources/arrived.png', 'path': 'resources/arrived.png'},
    {'name': 'resources/garden.png', 'path': 'resources/garden.png'},
    {'name': 'resources/**ev**eryone.png', 'path': 'resources/**ev**eryone.png'},
    {'name': 'resources/**t**all.png', 'path': 'resources/**t**all.png'},
    {'name': 'resources/summit.png', 'path': 'resources/summit.png'},
    {'name': 'resources/**disinfecta**nt.png', 'path': 'resources/**disinfecta**nt.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var initCodeClock;
var story;
var dif_condition;
var selected_condition;
var count;
var count_extra;
var this_condition;
var text_element;
var firstWelcomeClock;
var danish_welcome;
var welcome_resp;
var consentFormClock;
var text_4;
var agree_resp;
var confirmationFormClock;
var confirmation_text;
var conf_resp;
var welcomeScreenClock;
var text;
var key_resp;
var showStory_2Clock;
var story_image;
var word_resp;
var afterStoryClock;
var text_3;
var key_resp_4;
var fixationClock;
var text_7;
var showQuestionsClock;
var question_image;
var question_resp;
var afterQuestionsClock;
var text_5;
var key_resp_5;
var extraCodeClock;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "initCode"
  initCodeClock = new util.Clock();
  function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
  
  story = ["story_1", "story_2", "story_3", "story_4", "story_5"];
  dif_condition = ["_hfhs.xlsx", "_lfhs.xlsx", "_lfls.xlsx", "_hfls.xlsx", "_control.xlsx"];
  
  shuffle(story)
  shuffle(dif_condition)
  
  selected_condition = ["", "", "", "", ""];
  
  for (var i = 0, _pj_a = 5; (i < _pj_a); i += 1) {
      selected_condition[i] = (("resources/" + story[i]) + dif_condition[i]);
  }
  count = 0;
  count_extra = count;
  
  this_condition = selected_condition[0];
  
  text_element = "You have now answered all the questions to the story. \n\n Now, you will have to read the next story. \n\n Press the space-button when you are ready to continue.";
  // Initialize components for Routine "firstWelcome"
  firstWelcomeClock = new util.Clock();
  danish_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'danish_welcome',
    text: 'Velkommen til dette eksperiment!\n\nVenligst fortsæt eksperimentet i fuldskærmsvisning.\nNår eksperimentet er afsluttet, vent med at gøre noget indtil en besked på skærmen bekræfter, at data er blevet gemt.\n\n\nTryk på mellemrumstasten for at læse samtykkeerklæringen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  welcome_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consentForm"
  consentFormClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Dette er samtykkeerklæringen for dette eksperiment, som er en del af et Bachelorprojekt på Cognitive Science-uddannelsen på Aarhus Universitet.\n\nForventet tid for gennemførelse: 10-15 minutter\n\nHvis du har spørgsmål, kontakt venligst den ansvarlige for dette projekt:\nMie Buchhave Ryborg, 202004812@post.au.dk\n\nFor at deltage i dette eksperiment, skal du opfylde følgende krav:\n- Have normalt/korrigeret syn (du må godt bruge briller eller kontaktlinser)\n- Have dansk som modersmål\n\nDet brede fokus i dette bachelorprojekt er at undersøge læsning og forståelse af tekstmateriale. Den specifikke hypotese vil først blive fremlagt efter eksperimentet er færdigt, eftersom det muligvis vil kunne have indflydelse på resultaterne.\n\nDeltagelse i eksperimentet er frivilligt, og du er fri til at afbryde eksperimentet på et hvilket som helst tidspunkt. Dette gøres ved at trykke på “escape”-knappen på computeren og derefter lukke fanen. Al data indtil dette punkt vil blive slettet omgående. Vær opmærksom dog på, at du ikke kan deltage og fuldføre eksperimentet på et senere tidspunkt, hvis du vælger at afbryde.\n\nDa din data er anonymiseret, vil det ikke være muligt at identificere dig. Dette betyder også, at det ikke vil være muligt at slette din data, efter at eksperimentet er afsluttet.\n\nData vil blive gemt på en server via Pavlovia (pavlovia.org) samt i eksperimentets GitLab repositorium. Data vil derudover blive processeret lokalt på den ansvarliges egen computer. Al data vil blive slettet, når projektet er blevet evalueret i slutningen af januar 2023.\n\nVed at trykke på “J” på dit tastatur erklærer du dig enig i at have læst og forstået denne samtykkeerklæring. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  agree_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "confirmationForm"
  confirmationFormClock = new util.Clock();
  confirmation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confirmation_text',
    text: 'Du har nu bekræftet samtykkeerklæringen.\n\n\nDa eksperimentet foregår på engelsk, vil resten af eksperimentet nu også skifte til engelsk.\n\nTryk på mellemrumstasten for at fortsætte til introduktionen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  conf_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcomeScreen"
  welcomeScreenClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'In a moment, you will be presented to a short story, one word at a time.\nWhen you have read the word on the screen, press the space-button immediately. \nContinue doing this until the story has finished.\n\nAfter the story, you have to answer a few questions.\n\nThis procedure will repeat five times.\n\nPress the space-button when you are ready to start reading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "showStory_2"
  showStory_2Clock = new util.Clock();
  story_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'story_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  word_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "afterStory"
  afterStoryClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'The story is now finished.\n\nNow, you will have to answer some questions about the story.\nThere will be four answers, where one of them is correct.\n\nPress the corresponding number on your keyboard (1, 2, 3 or 4) that you think is the right answer.\n\nPress "enter" to read the first question.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "showQuestions"
  showQuestionsClock = new util.Clock();
  question_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'question_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.2, 0.7],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  question_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "afterQuestions"
  afterQuestionsClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "extraCode"
  extraCodeClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var initCodeComponents;
function initCodeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'initCode'-------
    t = 0;
    initCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    initCodeComponents = [];
    
    for (const thisComponent of initCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function initCodeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'initCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = initCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initCodeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'initCode'-------
    for (const thisComponent of initCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _welcome_resp_allKeys;
var firstWelcomeComponents;
function firstWelcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'firstWelcome'-------
    t = 0;
    firstWelcomeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    welcome_resp.keys = undefined;
    welcome_resp.rt = undefined;
    _welcome_resp_allKeys = [];
    // keep track of which components have finished
    firstWelcomeComponents = [];
    firstWelcomeComponents.push(danish_welcome);
    firstWelcomeComponents.push(welcome_resp);
    
    for (const thisComponent of firstWelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function firstWelcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'firstWelcome'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = firstWelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *danish_welcome* updates
    if (t >= 0.0 && danish_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      danish_welcome.tStart = t;  // (not accounting for frame time here)
      danish_welcome.frameNStart = frameN;  // exact frame index
      
      danish_welcome.setAutoDraw(true);
    }

    
    // *welcome_resp* updates
    if (t >= 0.0 && welcome_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_resp.tStart = t;  // (not accounting for frame time here)
      welcome_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_resp.clearEvents(); });
    }

    if (welcome_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_resp.getKeys({keyList: ['space'], waitRelease: false});
      _welcome_resp_allKeys = _welcome_resp_allKeys.concat(theseKeys);
      if (_welcome_resp_allKeys.length > 0) {
        welcome_resp.keys = _welcome_resp_allKeys[_welcome_resp_allKeys.length - 1].name;  // just the last key pressed
        welcome_resp.rt = _welcome_resp_allKeys[_welcome_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of firstWelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function firstWelcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'firstWelcome'-------
    for (const thisComponent of firstWelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome_resp.keys', welcome_resp.keys);
    if (typeof welcome_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome_resp.rt', welcome_resp.rt);
        routineTimer.reset();
        }
    
    welcome_resp.stop();
    // the Routine "firstWelcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _agree_resp_allKeys;
var consentFormComponents;
function consentFormRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consentForm'-------
    t = 0;
    consentFormClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    agree_resp.keys = undefined;
    agree_resp.rt = undefined;
    _agree_resp_allKeys = [];
    // keep track of which components have finished
    consentFormComponents = [];
    consentFormComponents.push(text_4);
    consentFormComponents.push(agree_resp);
    
    for (const thisComponent of consentFormComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function consentFormRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consentForm'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consentFormClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *agree_resp* updates
    if (t >= 0.0 && agree_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agree_resp.tStart = t;  // (not accounting for frame time here)
      agree_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { agree_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { agree_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { agree_resp.clearEvents(); });
    }

    if (agree_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = agree_resp.getKeys({keyList: ['j'], waitRelease: false});
      _agree_resp_allKeys = _agree_resp_allKeys.concat(theseKeys);
      if (_agree_resp_allKeys.length > 0) {
        agree_resp.keys = _agree_resp_allKeys[_agree_resp_allKeys.length - 1].name;  // just the last key pressed
        agree_resp.rt = _agree_resp_allKeys[_agree_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentFormComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentFormRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consentForm'-------
    for (const thisComponent of consentFormComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('agree_resp.keys', agree_resp.keys);
    if (typeof agree_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('agree_resp.rt', agree_resp.rt);
        routineTimer.reset();
        }
    
    agree_resp.stop();
    // the Routine "consentForm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _conf_resp_allKeys;
var confirmationFormComponents;
function confirmationFormRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'confirmationForm'-------
    t = 0;
    confirmationFormClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    conf_resp.keys = undefined;
    conf_resp.rt = undefined;
    _conf_resp_allKeys = [];
    // keep track of which components have finished
    confirmationFormComponents = [];
    confirmationFormComponents.push(confirmation_text);
    confirmationFormComponents.push(conf_resp);
    
    for (const thisComponent of confirmationFormComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function confirmationFormRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'confirmationForm'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = confirmationFormClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *confirmation_text* updates
    if (t >= 0.0 && confirmation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confirmation_text.tStart = t;  // (not accounting for frame time here)
      confirmation_text.frameNStart = frameN;  // exact frame index
      
      confirmation_text.setAutoDraw(true);
    }

    
    // *conf_resp* updates
    if (t >= 0.0 && conf_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conf_resp.tStart = t;  // (not accounting for frame time here)
      conf_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { conf_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { conf_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { conf_resp.clearEvents(); });
    }

    if (conf_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = conf_resp.getKeys({keyList: ['space'], waitRelease: false});
      _conf_resp_allKeys = _conf_resp_allKeys.concat(theseKeys);
      if (_conf_resp_allKeys.length > 0) {
        conf_resp.keys = _conf_resp_allKeys[_conf_resp_allKeys.length - 1].name;  // just the last key pressed
        conf_resp.rt = _conf_resp_allKeys[_conf_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of confirmationFormComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function confirmationFormRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'confirmationForm'-------
    for (const thisComponent of confirmationFormComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('conf_resp.keys', conf_resp.keys);
    if (typeof conf_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('conf_resp.rt', conf_resp.rt);
        routineTimer.reset();
        }
    
    conf_resp.stop();
    // the Routine "confirmationForm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var welcomeScreenComponents;
function welcomeScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'welcomeScreen'-------
    t = 0;
    welcomeScreenClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    welcomeScreenComponents = [];
    welcomeScreenComponents.push(text);
    welcomeScreenComponents.push(key_resp);
    
    for (const thisComponent of welcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function welcomeScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'welcomeScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = welcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'welcomeScreen'-------
    for (const thisComponent of welcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "welcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(trials_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/condition_1.xlsx',
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    const snapshot = trials_2.getSnapshot();
    trials_2LoopScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    trials_2LoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    trials_2LoopScheduler.add(trialsLoopScheduler);
    trials_2LoopScheduler.add(trialsLoopEnd);
    trials_2LoopScheduler.add(afterStoryRoutineBegin(snapshot));
    trials_2LoopScheduler.add(afterStoryRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(afterStoryRoutineEnd(snapshot));
    const questionsLoopLoopScheduler = new Scheduler(psychoJS);
    trials_2LoopScheduler.add(questionsLoopLoopBegin, questionsLoopLoopScheduler);
    trials_2LoopScheduler.add(questionsLoopLoopScheduler);
    trials_2LoopScheduler.add(questionsLoopLoopEnd);
    trials_2LoopScheduler.add(afterQuestionsRoutineBegin(snapshot));
    trials_2LoopScheduler.add(afterQuestionsRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(afterQuestionsRoutineEnd(snapshot));
    trials_2LoopScheduler.add(extraCodeRoutineBegin(snapshot));
    trials_2LoopScheduler.add(extraCodeRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(extraCodeRoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, this_condition, '4:'),
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(showStory_2RoutineBegin(snapshot));
    trialsLoopScheduler.add(showStory_2RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(showStory_2RoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var questionsLoop;
function questionsLoopLoopBegin(questionsLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  questionsLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, this_condition, '0:4'),
    seed: undefined, name: 'questionsLoop'
  });
  psychoJS.experiment.addLoop(questionsLoop); // add the loop to the experiment
  currentLoop = questionsLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisQuestionsLoop of questionsLoop) {
    const snapshot = questionsLoop.getSnapshot();
    questionsLoopLoopScheduler.add(importConditions(snapshot));
    questionsLoopLoopScheduler.add(fixationRoutineBegin(snapshot));
    questionsLoopLoopScheduler.add(fixationRoutineEachFrame(snapshot));
    questionsLoopLoopScheduler.add(fixationRoutineEnd(snapshot));
    questionsLoopLoopScheduler.add(showQuestionsRoutineBegin(snapshot));
    questionsLoopLoopScheduler.add(showQuestionsRoutineEachFrame(snapshot));
    questionsLoopLoopScheduler.add(showQuestionsRoutineEnd(snapshot));
    questionsLoopLoopScheduler.add(endLoopIteration(questionsLoopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function questionsLoopLoopEnd() {
  psychoJS.experiment.removeLoop(questionsLoop);

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var _word_resp_allKeys;
var showStory_2Components;
function showStory_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'showStory_2'-------
    t = 0;
    showStory_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    story_image.setImage(words);
    word_resp.keys = undefined;
    word_resp.rt = undefined;
    _word_resp_allKeys = [];
    // keep track of which components have finished
    showStory_2Components = [];
    showStory_2Components.push(story_image);
    showStory_2Components.push(word_resp);
    
    for (const thisComponent of showStory_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function showStory_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'showStory_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = showStory_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *story_image* updates
    if (t >= 0.0 && story_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      story_image.tStart = t;  // (not accounting for frame time here)
      story_image.frameNStart = frameN;  // exact frame index
      
      story_image.setAutoDraw(true);
    }

    
    // *word_resp* updates
    if (t >= 0.0 && word_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_resp.tStart = t;  // (not accounting for frame time here)
      word_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { word_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { word_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { word_resp.clearEvents(); });
    }

    if (word_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = word_resp.getKeys({keyList: ['space'], waitRelease: false});
      _word_resp_allKeys = _word_resp_allKeys.concat(theseKeys);
      if (_word_resp_allKeys.length > 0) {
        word_resp.keys = _word_resp_allKeys[_word_resp_allKeys.length - 1].name;  // just the last key pressed
        word_resp.rt = _word_resp_allKeys[_word_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of showStory_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function showStory_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'showStory_2'-------
    for (const thisComponent of showStory_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('word_resp.keys', word_resp.keys);
    if (typeof word_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('word_resp.rt', word_resp.rt);
        routineTimer.reset();
        }
    
    word_resp.stop();
    // the Routine "showStory_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var afterStoryComponents;
function afterStoryRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'afterStory'-------
    t = 0;
    afterStoryClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    afterStoryComponents = [];
    afterStoryComponents.push(text_3);
    afterStoryComponents.push(key_resp_4);
    
    for (const thisComponent of afterStoryComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function afterStoryRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'afterStory'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = afterStoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of afterStoryComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function afterStoryRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'afterStory'-------
    for (const thisComponent of afterStoryComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "afterStory" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(text_7);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function fixationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixation'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixation'-------
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _question_resp_allKeys;
var showQuestionsComponents;
function showQuestionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'showQuestions'-------
    t = 0;
    showQuestionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    question_image.setImage(questions);
    question_resp.keys = undefined;
    question_resp.rt = undefined;
    _question_resp_allKeys = [];
    // keep track of which components have finished
    showQuestionsComponents = [];
    showQuestionsComponents.push(question_image);
    showQuestionsComponents.push(question_resp);
    
    for (const thisComponent of showQuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function showQuestionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'showQuestions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = showQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_image* updates
    if (t >= 0.0 && question_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_image.tStart = t;  // (not accounting for frame time here)
      question_image.frameNStart = frameN;  // exact frame index
      
      question_image.setAutoDraw(true);
    }

    
    // *question_resp* updates
    if (t >= 0.0 && question_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_resp.tStart = t;  // (not accounting for frame time here)
      question_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { question_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { question_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { question_resp.clearEvents(); });
    }

    if (question_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = question_resp.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _question_resp_allKeys = _question_resp_allKeys.concat(theseKeys);
      if (_question_resp_allKeys.length > 0) {
        question_resp.keys = _question_resp_allKeys[_question_resp_allKeys.length - 1].name;  // just the last key pressed
        question_resp.rt = _question_resp_allKeys[_question_resp_allKeys.length - 1].rt;
        // was this correct?
        if (question_resp.keys == correct) {
            question_resp.corr = 1;
        } else {
            question_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of showQuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function showQuestionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'showQuestions'-------
    for (const thisComponent of showQuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (question_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         question_resp.corr = 1;  // correct non-response
      } else {
         question_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('question_resp.keys', question_resp.keys);
    psychoJS.experiment.addData('question_resp.corr', question_resp.corr);
    if (typeof question_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('question_resp.rt', question_resp.rt);
        routineTimer.reset();
        }
    
    question_resp.stop();
    // the Routine "showQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var afterQuestionsComponents;
function afterQuestionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'afterQuestions'-------
    t = 0;
    afterQuestionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    text_5.setText(text_element);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    afterQuestionsComponents = [];
    afterQuestionsComponents.push(text_5);
    afterQuestionsComponents.push(key_resp_5);
    
    for (const thisComponent of afterQuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function afterQuestionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'afterQuestions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = afterQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of afterQuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function afterQuestionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'afterQuestions'-------
    for (const thisComponent of afterQuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "afterQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var extraCodeComponents;
function extraCodeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'extraCode'-------
    t = 0;
    extraCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    extraCodeComponents = [];
    
    for (const thisComponent of extraCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function extraCodeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'extraCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = extraCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of extraCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function extraCodeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'extraCode'-------
    for (const thisComponent of extraCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    count = (count + 1);
    count_extra = count;
    if ((count > 4)) {
        count = 4;
    }
    if ((count === 4)) {
        text_element = "Dette var den sidste historie, og eksperimentet er nu slut. \n\n Tak for din deltagelse! \n\n OM EKSPERIMENTET: \n Dette projekt tager udgangspunkt i l\u00e6sev\u00e6rkt\u00f8jet \u201cBionic Reading\u201d, som er et v\u00e6rkt\u00f8j, der p\u00e5 baggrund af en algoritme konvertere en tekst, s\u00e5 dele af ord i en tekst er fremh\u00e6vet. Dette eksperiment er med til at unders\u00f8ge, hvorvidt dette v\u00e6rkt\u00f8j p\u00e5virker l\u00e6sehastighed og l\u00e6seforst\u00e5else. \n\n Tryk p\u00e5 mellemrumstasten for at afslutte eksperimentet. \n\n Vent venligst med at afslutte fuldssk\u00e6rmsvisning, indtil beskeden p\u00e5 sk\u00e6rmen bekr\u00e6fter, at data er gemt.";
    }
    this_condition = selected_condition[count];
    
    // the Routine "extraCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
