import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpace'
})

export class ConvertToSpacePipe implements PipeTransform {

    transform(value: string, charactor: string) {
        return value.replace(charactor, ' ');
    }

}