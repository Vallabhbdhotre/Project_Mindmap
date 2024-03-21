import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentsinfoService {
  constructor() {}
   componentdata={
      online: {
        name: 'Online',
        description: 'Total reviews:123',
      },
      public_Data: {
        name: 'Public Data',
        description: 'Details of Public Data...',
      },
      health: {
        name: 'Health',
        description: 'Details of Health...',
      },
      interview: {
        name: 'Interview',
        description: 'Details of interview...',
      }
    };
  
  
      
} 