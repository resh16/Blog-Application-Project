import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

 
  public blogForm !: FormGroup ;

  constructor(private formBuilder: FormBuilder, private service: BlogService) {
    
   }

  ngOnInit(): void {
    this.init();
  }

public saveBlog(): void{
  this.service.addBlog(this.blogForm.value).subscribe(result => {
    alert(`New Blog added with id = ${result} `);
  });

}

  private init(): void{
     this.blogForm = this.formBuilder.group({
       title: [],
       content: []

     });
  }

}
