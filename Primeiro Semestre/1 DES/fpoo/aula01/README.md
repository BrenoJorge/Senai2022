Compitar por linha de comando "cmd":
1) Criar uma vari�vel de ambiente apontando para o JDK (C:\Program Files\Java\jdk*vers�o*\bin)

a) comando cmd para verificar se a vari�vel de ambiente est� configurada:
-javac -version

b) Para criar a vari�vel de ambiente acesse:
- (Windows + Pause/Break)
- Configura��es avan�adas do sistema,
- Em "Vari�veis do Sistema" clique em "Novo".
- Nome da Vari�vel: JAVA_HOME
- Valor da Vari�vel: C:\Program Files\Java\jdk1.8.0_144\bin

c)Configurar o path, adicionar ao final:
-;%JAVA_HOME%

2) Escrever o programa sem refer�ncia a pacotes, colocar codifica��o de caracteres ANSI e salvar com a exten��o .java

3) Para compilar digitar o comando (javac Arquivo.java)

4) Para executar digitar o comando (java Arquivo)

V�deo eplicativo: https://www.youtube.com/watch?v=BHvI_IQkAYg