import { Injectable } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Injectable({ providedIn: 'root' })
export class PwaService {
  promptEvent: any;
  constructor(swUpdate: SwUpdate, swPush: SwPush) {
    swPush
      .requestSubscription({
        serverPublicKey:
          'BDdQz-Yw2tGX1PE06Xgu8GH2rUEd4nix8awVcg8qDrnHe6g0G6OzwYlVi-VsrASHpkj4V00QOibYhQVZhMMvLaw'
      })
      .then(sub => {
        console.log('Push Subscription', JSON.stringify(sub));

        swPush.messages.subscribe(message => {
          console.log('received message', message);
        });
      });

    swPush.notificationClicks.subscribe(payload => {
      console.log('payload', payload);
      window.open(payload.notification.data.url, '_blank');
    });
  }
}
