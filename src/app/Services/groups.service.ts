import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Group } from '../interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groups : Group[] = [];
  group! : Group;
  studentsList! : [];

  constructor(
    private _db : AngularFirestore
  ) { }

  async createGroups( matricula:String ) : Promise<void>{
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
          contentComplete: 0,
          id : res.docs[i].id
        }
        this.groups.push( newGroup );
      }  
    }
    
  }

  getGroups() : Group[] {
    return this.groups;
  }

  async createGroup( id:string ) {
    let res = await (await this._db.collection("materias").doc(id).get().toPromise().then()).data() as any;
    let contenido : any = await (await this._db.collection("contenidos").doc(res.id_contenido).get().toPromise().then()).data();
    this.group = {
      name : contenido.nombre_materia,
      students : res.lista_alumnos.length,
      contentTotal: res.total_temas,
      contentComplete: 0,
      id : res.id
    }
    this.studentsList = res.lista_alumnos
  }

  getGroup() : Group {
    return this.group;
  }

  getStudentsList(){
    return this.studentsList;
  }

}
