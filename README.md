# ruby-framework-css

Systeme de grille
    Les breakpoints peuvent etre redéfini dans le fichier sass

    $breakpoint-xs: 480px !default
    $breakpoint-sm: 768px !default
    $breakpoint-md: 992px !default
    $breakpoint-lg: 1200px !default

    .col-[xs|sm|md|lg]-*
        Créer un élément de * colonnes responsives.

    .col-offset-[xs|sm|md|lg]-*
        Ajoute une marge gauche de * colonnes

    .row
        Créer une ligne avec des marges négatives

    .container
        Créer un conteneur qui prend 90% de largeur de l'ecran

    .container-fixed
        Créer un conteneur de taille fixe

Systeme de label flottant:

    Il faut un element avec une classe .input-field div qui englobe l'input suivit du label.

    exemple :
        <div class="input-field">
            <input type="text" name="name" required>
            <label for="name">test</label>
        </div>

    Pour un input sans attribut requires le fichier .js est requis
    
Pour compiler le sass :
    - utiliser compass
    - installer via gulp : 'npm install -g gulp' et faire : 'gulp sass'
