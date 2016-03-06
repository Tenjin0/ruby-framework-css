# ruby-framework-css

https://github.com/Tenjin0/ruby-framework-css

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

    Il faut un element avec une classe .input-field qui englobe l'élément input suivit du label.

    fonctionnalité optionnelle : On peut rajouter un message d'erreur ou de succés si le contenu de l'input correspond au regex
    défini dans l'attribut pattern.
        note : nécessite le script javascript
    
    exemple :
        <div class="input-field">
            <input type="text" pattern="." name="name">
            <label for="name" data-error="wrong" data-success="right">test</label>
        </div>

    Pour un input sans attribut 'required' le fichier .js est requis

Pour compiler le sass :
    - utiliser compass
    - installer via gulp : 'npm install -g gulp' et faire : 'gulp sass'
