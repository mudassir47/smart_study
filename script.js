// JavaScript for hover effect (optional)
const engineeringList = document.getElementById('engineering-list');
const subjects = engineeringList.getElementsByTagName('li');

for (let i = 0; i < subjects.length; i++) {
  subjects[i].addEventListener('mouseover', function() {
    this.style.fontWeight = 'bold';
  });

  subjects[i].addEventListener('mouseout', function() {
    this.style.fontWeight = 'normal';
  });
}
