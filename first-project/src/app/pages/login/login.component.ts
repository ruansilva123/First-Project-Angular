import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../shared/input-text/input-text.component';
import { SubmitFormComponent } from '../../shared/submit-form/submit-form.component';
import { DummyJsonService } from '../../services/login/dummy-json.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextComponent, SubmitFormComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  users: any[] = [];

  constructor(private dummyService: DummyJsonService) {}

  ngOnInit() {
    this.dummyService.getUsers().subscribe(data => {
      this.users = data.products; 
    });
  }
}
