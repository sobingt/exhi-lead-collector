import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

export interface Section {
  name: string;
  slug: string;
  url: string;
  checked: boolean;
}

export interface Interest {
  name: string;
  slug: string;
  checked: boolean;
}

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    console.clear();

    this.form = this.fb.group({
      skills: this.buildSkills()
    });

    console.log(this.form.get("skills"))
  }

  ngOnInit() {
  }

  customRate = 2;
  
  interests: Interest[] = [
   { 
     name: 'Product A',
     slug: 'product-a',
     checked: false
    },
    { 
      name: 'Product B',
      slug: 'product-c',
      checked: false
    },
    { 
      name: 'Product C',
      slug: 'product-c',
      checked: false
    },
    { 
      name: 'Partnership',
      slug: 'partnership',
      checked: false
    }
  ]
  products : Section[] = [
    {
      name: 'Product One',
      slug: 'product-one',
      url: 'https://via.placeholder.com/75',
      checked: false
    },
    {
      name: 'Product Two',
      slug: 'product-two',
      url: 'https://via.placeholder.com/75',
      checked: false
    }
  ]
  user = {
    skills: [
      { name: 'Product 2', selected: true, id: 12 },
      { name: 'Product 1', selected: false, id: 2 },
    ]
  }
  form;
  

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  };


  buildSkills() {
    const arr = this.user.skills.map(s => {
      return this.fb.control(s.selected);
      // return this.fb.group({
      //   selected: [s.selected],
      //   id: [s.id]
      // }
    })
    return this.fb.array(arr);
  }

  submit(value) {

    const f = Object.assign({}, value, {
      skills: value.skills.map((s, i) => {
        return {
          id: this.user.skills[i].id,
          selected: s
        }
      })
    })

    console.log(f);
  }


}
