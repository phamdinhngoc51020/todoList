import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/students';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  test: string[] = ["Nguyen","Nguyen"];
  glstStudent: student[] = [];
  student = new student();
  isInsert = true;
  index: number = -1;
  constructor() {

  }

  ngOnInit(): void {
    this.glstStudent.push({ id: 1, bGioitinh: true, sHoten: 'Nguyễn Văn A', tNgaysinh: '2000-10-20' });
    this.glstStudent.push({ id: 2, bGioitinh: false, sHoten: 'Nguyễn Văn B', tNgaysinh: '2000-05-01' });
  }
  handlingStudent() {
    if (this.isInsert) {
      this.student.id = this.glstStudent.length + 1;
      this.glstStudent.push(this.student);
      console.log(this.glstStudent);
    } else {
      this.glstStudent.splice(this.index, 1, this.student);
    }
    this.btnHuy();
  }

  editStudent(id?: number) {
    this.student = this.glstStudent.find(student => student.id === id)!;
    this.isInsert = false;

    this.index = this.glstStudent.findIndex(function (student) {
      return student.id === id;
    });
  }

  deleteStudent(id?: number) {
    this.glstStudent = this.glstStudent.filter(student => student.id !== id);
    this.btnHuy();
  }

  btnHuy() {
    this.student = new student();
    this.isInsert = true;
    this.index = -1;
  }
}
