import { Component, OnInit } from '@angular/core';
interface student {
  id: number;
  name: string;
  surname: string;
  age: number;
  image: string;
  isActive: boolean;
};
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  students: Array<student> = [
    {
      id: 1,
      name: "Galo",
      surname: "Meggiolaro",
      age: 24,
      image: "",
      isActive: true
    },
    {
      id: 2,
      name: "Hasbulla",
      surname: "Magomedov",
      age: 19,
      image: "https://www.clarin.com/img/2022/06/28/hasbulla-la-sensacion-viral-de___eVWrlN97S_2000x1500__1.jpg",
      isActive: false
    },
    {
      id: 3,
      name: "Lionel",
      surname: "Messi",
      age: 35,
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/U75MEUMD6AH7FRUIK74E2IJGVY.jpg",
      isActive: true
    },
    {
      id: 4,
      name: "Farrokh",
      surname: "Bulsara",
      age: 45,
      image: "https://www.biografiasyvidas.com/biografia/m/fotos/mercury.jpg",
      isActive: true
    }
  ]
  changeStatus(id: number) {
    this.students.forEach(student => {
      if (student.id === id) {
        student.isActive = !student.isActive;
      }
    }
    )
  }
  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
