window.onload = () => {
    document.getElementById('landing').addEventListener('mousemove', reveal); 

    function reveal() {
        document.getElementById('item').innerHTML = Math.random();
    }
    
    document.getElementById('btn').addEventListener('click', () =>{
        document.getElementById('landing').removeEventListener('mousemove', reveal);
    });
}