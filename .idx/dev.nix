{ pkgs }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  packages = [
    pkgs.nodejs
    pkgs.yarn
    pkgs.nodePackages.pnpm
    pkgs.bun
    pkgs.nodePackages.firebase-tools
    pkgs.openssl
    pkgs.sudo
  ];
  idx.extensions = [
  
 "bierner.color-info"
 "bradlc.vscode-tailwindcss"
 "christian-kohler.npm-intellisense"
 "christian-kohler.path-intellisense"
 "dbaeumer.vscode-eslint"
 "dsznajder.es7-react-js-snippets"
 "ecmel.vscode-html-css"
 "esbenp.prettier-vscode"
 "formulahendry.auto-close-tag"
 "formulahendry.auto-complete-tag"
 "formulahendry.auto-rename-tag"
 "Gydunhn.javascript-essentials"
 "ms-vscode.vscode-typescript-next"
 "pucelle.vscode-css-navigation"
 "PulkitGangwar.nextjs-app-directory-commands"
 "PulkitGangwar.nextjs-snippets"
 "vunguyentuan.vscode-css-variables"
 "xabikos.JavaScriptSnippets"
 "Prisma.prisma"
 "Prisma.prisma-insider"];
  # runs when a workspace is first created with this `dev.nix` file
  # to run something each time the environment is rebuilt, use the `onStart` hook
  idx.previews = {
    enable = true;
    previews = [
      {
        command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
        manager = "web";
        id = "web";
      }
    ];
  };
}
