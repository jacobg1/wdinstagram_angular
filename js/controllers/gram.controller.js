angular
.module('wdinstagram')
.controller('GramIndexController', [
  GramIndexControllerFunction
])

function GramIndexControllerFunction () {
  this.grams = [
      { author: 'spidey', body: '1-800-spiderman', photo_url: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png' },
      { author: 'Bat Dude', body: '1-800-bats', photo_url: 'http://fc01.deviantart.net/fs70/i/2010/032/3/1/Batman_Vector_by_potatoketchup.jpg' },
      { author: 'dare devil', body: '1-800-devil', photo_url: 'http://www.fantastic-four.nl/daredevil.gif' },
      { author: 'Luke Cage', body: '1-800-badass', photo_url: 'http://img06.deviantart.net/ccfc/i/2016/212/e/0/luke_cage___transparent_by_natan_ferri-dabq2zh.png' },
      { author: 'super man', body: '1-800-worst-hero', photo_url: 'http://www.pngmart.com/files/2/Superman-Transparent-Background.png' },
      { author: 'silver surfer', body: '1-800-destruction', photo_url: 'http://animeonly.org/albums/2007_04_30/Games/Silver_Surfer_2.png' }
  ]
}
