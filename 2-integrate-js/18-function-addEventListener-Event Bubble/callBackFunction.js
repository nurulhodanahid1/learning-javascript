function personWork(name, age, work){
    console.log('name:-',name);
    console.log('age:-',age);
    console.log('profession:-', work);
    console.log('profession:-');
    work();
}

function cricket(){
    console.log('Playing Cricket');
}
function football(){
    console.log('Playing Football');
}
personWork('Shakib', 33, cricket);
personWork('Messi', 34, football);