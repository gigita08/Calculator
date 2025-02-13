import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent],
    
})
export class AppModule { }