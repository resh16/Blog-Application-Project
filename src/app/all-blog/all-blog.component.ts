import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css']
})
export class AllBlogComponent implements OnInit {

  public blog:any;
  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  // all blogs
  private getBlog():void{
    this.service.getBlog().subscribe(result => {
      this.blog = result;
    });
  }
 
  // Delete action
  deleteBlog(id:number){
    this.service.deleteBlog(id)
    .subscribe( result => {
        this.blog = result;
      });
      
  }


}
