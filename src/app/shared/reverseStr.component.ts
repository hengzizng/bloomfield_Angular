import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverseStr'
})

export class ReverseStrPipe implements PipeTransform {

    transform(value: string, charactor: string) {
        return value.split("").reverse().join("");
    }
}
