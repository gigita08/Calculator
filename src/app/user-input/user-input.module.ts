import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserInputComponent } from "./user-input.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [UserInputComponent],
    imports: [FormsModule, BrowserModule, CommonModule],
    exports: [UserInputComponent]
    
})
export class UserInputModule {}