import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-head-tail',
  templateUrl: './head-tail.component.html',
  styleUrls: ['./head-tail.component.scss']
})
export class HeadTailComponent implements OnInit {
  val: string = "";
  i = 0;
  title: any = []
  constructor() {
    this.title = [{ name: "Head", value: "H" }, { name: "Tail", value: "T" }];
  }
  ngOnInit(): void { }

  select(htForm: any): void {
    let value = htForm.value.choose;
    if (value != this.val) {
      this.val = value;
      this.i++;
      const spannode = document.createElement("span");
      spannode.setAttribute("id", `s${this.i}`);
      let cardBody = document.getElementById("cardbody1");
      cardBody?.appendChild(spannode);
    }
    var element = document.getElementById(`s${this.i}`);
    const s1node = document.createElement("div");
    const textnode2 = document.createTextNode(value);
    s1node.style.width = "15px";
    s1node.appendChild(textnode2);
    element?.appendChild(s1node);

  }
}
