import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Group } from '../interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groups : Group[] = [];

  constructor(
    private _db : AngularFirestore
  ) { }

  async createSubjects( matricula:String ) : Promise<void>{
    console.log("Creando grupos",matricula);
    this.groups = []
    let res = await this._db.collection("materias").get().toPromise().then();
    for (let i = 0; i < res.docs.length; i++) {
      let documento = res.docs[i].data() as any;
      if ( documento.matricula_profesor == matricula  ) {
        let contenido : any = await (await this._db.collection("contenidos").doc(documento.id_contenido).get().toPromise().then()).data();
        let newGroup : Group = {
          name : contenido.nombre_materia,
          students : documento.lista_alumnos.length,
          contentTotal: documento.total_temas,
          contentComplete: 0
        }
        this.groups.push( newGroup );
      }  
    }
    
  }

  getGroups() : Group[] {
    return this.groups;
  }

}
