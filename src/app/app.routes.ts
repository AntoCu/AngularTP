import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { AuthGuard } from './auth-guard'
import { UserComponent } from './user/user';
import { RandomJokeComponent } from './randomjoke/randomjoke.component';
import { HelloWorld } from './hello-world/hello-world';
import { GuessCharacterComponent } from './guess-character/guess-character';

export const routes: Routes = [
    { path: '', component: Home, canActivate: [AuthGuard] },
    { path: 'login', component: Login },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'randomjoke', component: RandomJokeComponent },
    { path: 'memory', component: HelloWorld },
    { path: 'guess', component: GuessCharacterComponent },

];


