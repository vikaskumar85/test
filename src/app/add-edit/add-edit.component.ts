import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from '../_model/contact-model.model';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']

})
export class AddEditComponent implements OnInit {
  addEditForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactModel,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addEditForm = this.fb.group({
      id: [this.data ? this.data.Id : null],
      firstName: [this.data ? this.data.FirstName : '', Validators.required],
      lastName: [this.data ? this.data.LastName : '', Validators.required],
      email: [this.data ? this.data.Email : '', [Validators.required, Validators.email]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.addEditForm.valid) {
      this.dialogRef.close(this.addEditForm.value);
    }
  }
}