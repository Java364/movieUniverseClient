import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';

import {Router} from "@angular/router";

@Injectable()
export class LoginService {

  constructor( private router: Router,
               private httpClient: HttpClient) {
  }}
