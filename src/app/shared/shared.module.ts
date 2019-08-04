import { NgModule } from "@angular/core";
import { DirectivesModule } from './directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports:[
        DirectivesModule,
        ReactiveFormsModule
    ]
})
export class SharedModule{

}