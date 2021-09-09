import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-display-single-blog',
  templateUrl: './display-single-blog.component.html',
  styleUrls: ['./display-single-blog.component.css']
})
export class DisplaySingleBlogComponent implements OnInit {

  currentBlog: any;
  message = '';

  constructor(
    private blogsService: BlogService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBlog(this.route.snapshot.paramMap.get('id'));
  }

  getBlog(id: string|null ): void {
    this.blogsService.getItem(id)
      .subscribe(
        (blog: null) => {
          this.currentBlog =  blog;
          console.log(blog);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      name: this.currentBlog.name,
      description: this.currentBlog.content,
      available: status
    };

    this.blogsService.update(this.currentBlog.id, data)
      .subscribe(
        (        response: any) => {
          this.currentBlog.available = status;
          console.log(response);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  updateBlog(): void {
    this.blogsService.update(this.currentBlog.id, this.currentBlog)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        (        error: any) => {
          console.log(error);
        });
  }

  deleteBlog(): void {
    this.blogsService.deleteBlog(this.currentBlog.id)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.router.navigate(['/blog']);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  

}

/* import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentBook: any;
  message = '';

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }

  getBook(id: string | null): void {
    this.booksService.getItem(id)
      .subscribe(
        (book: null) => {
          this.currentBook = book;
          console.log(book);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      name: this.currentBook.name,
      description: this.currentBook.description,
      available: status
    };

    this.booksService.update(this.currentBook.id, data)
      .subscribe(
        response => {
          this.currentBook.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateBook(): void {
    this.booksService.update(this.currentBook.id, this.currentBook)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteBook(): void {
    this.booksService.delete(this.currentBook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/books']);
        },
        error => {
          console.log(error);
        });
  }

} */