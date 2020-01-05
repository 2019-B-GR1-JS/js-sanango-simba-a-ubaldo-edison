import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetController: ActionSheetController) {}
  arregloObjetos = [
    {
      id_account: 1,
      photo: 'https://i.pinimg.com/originals/c9/ac/fe/c9acfe722a188d5491a6d9623f379f12.jpg',
      user_: 'r/memes',
      time_: '5m',
      content_: 'Florida man has found his wife',
      image: [{
        url: 'https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/cover-photo.png',
      }]
    }, {
      id_account: 2,
      photo: 'https://i.vippng.com/png/small/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png',
      user_: 'r/edison',
      time_: '7m',
      content_: 'Tell me more',
      image: [{
        url: 'https://www.freecodecamp.org/news/content/images/2019/07/why-does-this-happen.png',
      }]
    }, {
      id_account: 3,
      photo: 'https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800',
      user_: 'r/ubaldo',
      time_: '9m',
      content_: 'Stream games with COLOR',
      image: [{
        url: 'https://i.pinimg.com/236x/30/90/33/309033e0556b9dc5a48ff3251a715366.jpg',
      }]
    }, {
      id_account: 4,
      photo: 'http://www.fiba.basketball/api/img/player/coverimage/5/9472/145887/980/462',
      user_: 'r/sports',
      time_: '11m',
      content_: 'Gotta love college',
      image: [{
        url: 'https://img.europapress.es/fotoweb/fotonoticia_20140714104825-625059_640.jpg',
      }]
    }
  ];
  async presentPosts() {
    const actionSheet = await this.actionSheetController.create({
      header: 'SORT POSTS BY',
      buttons: [{
        text: 'Best',
        icon: 'rocket',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Hot',
        icon: 'flame',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'New',
        icon: 'sunny',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Top',
        icon: 'podium',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Controversial',
        icon: 'flash',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Rising',
        icon: 'trending-up',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
