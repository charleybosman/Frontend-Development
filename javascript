
// document slaat op het html document
// getElementById pakt het element met dat ID
// <fieldset id="project"> en <fieldset id="stage">
var project = document.getElementById('project');
var stage = document.getElementById('stage');
 

var radioProject = document.getElementsByName('submit-for')[0];
var radioStage = document.getElementsByName('submit-for')[1];
 
project.classList.add('hide');
stage.classList.add('hide');
 
radioProject.addEventListener('change', function () {
    // de gebruiker selecteert de project radio button, dus de fieldset die daaraan correspondeert wordt zichtbaar gemaakt. dit gebeurt door de 'hide' class weg te nemen.
    project.classList.remove('hide');
    // met het andere element gebeurt de eerste keer nog niks, omdat het al onzichtbaar is. dit is voor als de gebruiker op de andere radio button drukt, het tegenovergestelde formfield moet dan wél weer onzichtbaar gemaakt worden.
    stage.classList.add('hide');
});
 
radioStage.addEventListener('change', function () {
    project.classList.add('hide');
    stage.classList.remove('hide');
});
 
 
