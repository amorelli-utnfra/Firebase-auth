import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  item$: Observable<Persona[]>;

  constructor(firestore: Firestore ) {
    const personasCollection = collection(firestore, 'personas');
    this.item$ = collectionData(personasCollection) as Observable<Persona[]>;

   }

}
