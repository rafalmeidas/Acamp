import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


/**
 * Ele terá um @Injectable com escopo global, portanto com uma única instância para a aplicação inteira (providedIn: 'root').
 
 * Até o momento, fizemos injeções por tipo, mas podemos fazê-lo através de um identificador, 
 * no caso, o PLATFORM_ID de tipo string. 
 * Usaremos também o @Inject(PLATFORM_ID) que, se não fosse usado, forçaria o Angular a injetar uma string sem saber qual.

 * Além disso, criaremos o método isPlatformBrowser(), que precisará retornar "verdadeiro" ou "falso"
 * para identificar a plataforma em uso. 
 * Para este teste, precisaremos importar a função isPlatformBrowser do pacote @angular/common. 
 * Então, quem o chamar terá o resultado de isPlatformBrowser() com o parâmetro this.platformId.
**/

@Injectable({
  providedIn: 'root' 
})
export class PlataformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId);
    }
}
