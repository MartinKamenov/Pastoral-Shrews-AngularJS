import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ToasterService, Toast } from 'angular2-toaster';


@Injectable()
export class AuthService {

    authState: any = null;

    constructor(private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private toasterService: ToasterService,
        private router: Router) {

        this.afAuth.authState.subscribe((auth) => {
            this.authState = auth;
        });
    }

    // Returns true if user is logged in
    get authenticated(): boolean {
        return this.authState !== null;
    }

    // Returns current user data
    get currentUser(): any {
        return this.authenticated ? this.authState : null;
    }

    // Returns
    get currentUserObservable(): any {
        return this.afAuth.authState;
    }

    // Returns current user UID
    get currentUserId(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    get currentUserDisplayName(): string {
        const username = this.authState.email.split('@')[0];
            return username;
     }

     get currentUserEmail(): string {
        return this.authenticated ? this.authState.email : '';
    }
    //// Email/Password Auth ////
    emailSignUp(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                this.updateUserData();
                this.toasterService.pop('success', `${user.email} is Registrated`);
            })
            .catch(error => this.toasterService.pop('error', error.message));
    }

    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                this.updateUserData();
            })
            .catch(error => this.toasterService.pop('error', error.message));
    }

    //// Sign Out ////
    signOut(): void {
        this.afAuth.auth.signOut();
    }


    //// Helpers ////
    private updateUserData(): void {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features

        const path = `users/${this.currentUserId}`; // Endpoint on firebase
        const data = {
            email: this.authState.email,
            name: this.authState.displayName
        };

        this.db.object(path).update(data)
            .catch(error => console.log(error));
    }
}
