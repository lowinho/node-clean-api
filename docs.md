# comandos git 
git config --global core.editor code
git config --global --edit
[user]
	email = "your email"
	name = "your name"
[core]
	editor = code --wait
[alias]
	s = !git status -s
	c = !git add --all && git commit -m
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d%C(white) %s - %C(cyan)%cn, %C(green)%cr'

conventional commits = [https://www.conventionalcommits.org/en/v1.0.0/]

Adiciona o commit atual no mesmo anterior sem alterar texto
git commit --amend --no-edit

# jest
jest --clearCache

# husky with lint-staged
npx husky add .husky/pre-commit "npx lint-staged --verbose
[https://valchan.com.br/lint-staged-husky/]