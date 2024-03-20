import { Injectable, inject } from '@angular/core';
import { HospitalDoctorsService } from './hospital-doctors.service';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  //title = 'angular_services';

  //docCount: number = 0;

  //countService: CountService = inject(CountService);

  constructor() { 

    this.numOfDoctors = this.hospitalService.getDoctors();
  }
  
  numOfDoctors : number = 0;
  
  hospitalService: HospitalDoctorsService = inject(HospitalDoctorsService);

}
