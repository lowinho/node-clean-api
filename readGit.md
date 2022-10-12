# comandos git 
git config --global core.editor code
git config --global --edit
[user]
	email = lowinho@yahoo.com.br
	name = César Lowe
[core]
	editor = code --wait
[alias]
	s = !git status -s
	c = !git add --all && git commit -m
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d%C(white) %s - %C(cyan)%cn, %C(green)%cr'

conventional commits = [https://www.conventionalcommits.org/en/v1.0.0/]