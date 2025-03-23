const estrategias = {
    "SRP IP PFR": {
        // Flop ------------------------------
        "Vs Check": "- Cbet B33, Range.",
        "Vs xBr": "- Defesa GTO até 4.5x\n- Overfoldar para sizes maiores.",
        "Vs Donkbet": "- Overcall até b75\n- Defesa GTO contra sizes maiores\n- Raise linear contra b50 incluindo HEB.",
        // Turn -------------------------------
        "Vs xBc x": "- B75 apenas mãos com três streets claras de valor\n- Blefes com equidade (flush draw, OESD, gutshot)\n- Air em overcard.",
        "xBc xBr": "- Vs BTN: Dar um pouco de overcall (exceto em DPs ruins).\n- Vs CO/EP: Defesa GTO.\nFISH:\n- Overfoldar em todas posições\n- Shove linear.",
        "xBrC b": "- Vs BTN: Dar um pouco de overcall (exceto em DPs ruins).\n- Vs CO/EP: Defesa GTO.\nFISH:\n- Call GTO.",
        "xBrC x": "- SDV: Check\n- Airs: B33\n- Valor: B75\n- Blefe: B75.",
        "xX b": "- Dar overcall e pagar river (exceto em overbet OTR).\n- Não dar raise por blefe, fish está dando overcall.",
        "xX x": "- SDV: Check\n- Airs: B33\n- Valor: B33\n- Blefe: B33.",
        // River ------------------------------
        "xBc xBc x": "REG:\n- B50 a B100, todos os blefes\n- Valores parecido coma teoria. (B75 ou B150)\nFISH:\n- B50, todos os blefes\nB100+, valores",
        "xBc xBrC b": "REG:\n- Favorecer foldar todos os bluffcatchers.\n- BB x BTN é um pouco mais close e você pode favorecer dar call com os melhores bluffcatchers.\nFISH:\n- Pagar somento com mãos que dominam valor.",
        "xBc xX b": "REG:\n- Vs BTN, Overcall contra todas sizes e raise por blefe contra b75\n- Vs CO-EP, Defender GTO contra b100 e Overcall o resto, raise apenas contra b50\nFISH:\n- Overcall contra sizes até b100, raise com todos os blefes sempre.\n- Overfoldar contra overbet e raise apenas com mãos que dominam valor.",
        "xBc xX x": "- Mão fortes: B75 e call contra o raise Reg, nunca de o bluffcatcher contra o fish quando tomar raise\n- Nuts: B120\n- Valor Médio: B33\n- Blefe: B150",
        "xBrC bC b": "REG:\n- Vs BTN - Defesa GTO.\n- Vs CO-EP - Pagar apenas com mãos que dominam valor\nFISH:\n- Vs size baixa de XR overcall até 75%.\n- GTO o resto e overfoldar para OB",
        "xBrC xBc x": "REG:\n- B50 ou B120, todos os blefes\nFISH:\n- B50, todos os blefes",
        "xBrC xX b": "REG:\n- Call com todos os bluffcatchers ate 2x pot, linha bem overblefada.\nFISH:\n- Call com todos os bluffcatchers até b100. Contra OB é under",
        "xBrC xX x": "- B150, contra ambos profiles",
        "xX bC b": "REG:\n- Favoreça dar call com todos os bluffcatchers, a não ser que eles overbetem turn e betem 70% até 100% river\nFISH:\n- Favoreça dar bluffcatch contra todos os sizes até 100% (mesmo se eles betem big no turn). Fold vs overbet.",
        "xX bC x": "REG:\n- B150, Depois de betarem 30% até 70%\n- B30, Depois de betarem 100% até 150%\nFISH:\n- B150, todos os blefes",
        "xX xBc x": "- B50 ou B150, todos os blefes, contra reg que estiver adaptando e reg mais agro nos BC, B100",
        "xX xX x": "- B120, todos os blefes"
    },

    "SRP IP PFC": {
        "vs b33": "REG:\n- Overcall e overraise com mãos que não conseguem jogar bem as próximas streets e mãos de valor.\nFISH:\n- Overcall e raise GTO.",
        "vs b50": "REG:\n- Overcall e raise GTO.\nFISH:\n- Defesa GTO e raise linear.",
        "vs b75": "REG:\n- Defesa GTO e raise linear.",
        "xB": "REG:\n- Betar 33% com todas as mãos, padrão.\nFISH:\n- Betar o topo do range, checkar mãos médias, betar draws, backdoors e airs.",
        "xB": "REG:\n- Como padrão betar todas as mãos 33% sempre.\nFISH:\n- Betar o topo do range, checkar mãos médias, betar draws, backdoors e airs.",
        "xBr": "REG:\n- Defender GTO, favorendo o fold com mãos que continuam com baixa frequência.\nFISH:\n- Defender GTO e favorer o call contra jogadores mais agressivos.",
        "bC b": "REG:\n- Overcall depois de 33% ou 50% no flop.\n- Pode dar raise contra regs mais agressivos na linha B30-B70.\nFISH:\n- Overcall até 75% no flop. Overfold após 100%.",
        "bC xB": "REG:\n- Betar 50% com air, blefes com equidade betar 75% - 120%, valuebetar mãos com duas streets de valor.\nFISH:\n- Mesmo approach de reg.",
        "bRc x": "REG:\n- Betar apenas os melhores blefes e mãos muito boas de valor.\nFISH:\n- Mesmo approach de reg.",
        "xBc xB": "REG:\n- Barrelar todos os blefes com 75%.\n- Apenas mãos com três streets de valor com 75%+.\nFISH:\n- Mesmo approach de reg.",
        "xBrC b": "REG:\n- Defender GTO e favorer o call quando betar 33% flop.\nFISH:\n- Defender GTO e favorer o call contra fish agressivo.",
        "xX xB": "REG:\n- Overfold grande. Com air betar 50%, blefes com equidade betar 75% - 120%, valuebetar mãos com duas streets de valor.\nFISH:\n- Mesmo approach de reg.",
        "xX B": "REG:\n- Overcall contra todas as sizes e overraise até 50%. Se tomar call, ser seletivo com os blefes no river.\nFISH:\n- Overcall contra todas as sizes e overraise até 50%. Se tomar call, betar todos os blefes com 50% no river.",
        "bC bC b": "REG:\n- Overcall contra todas as sizes quando flop foi 33%. Contra sizes de 50% e 75%, ainda existe overblefe, mas é menor.\n- Depois de 33% flop e até 100% river, dar raise por blefe contra jogadores mais agressivos.\nFISH:\n- Overcall contra size de até 100%. Nunca blefar fish nessa linha.",
        "bC bC xB": "REG:\n- Betar todos os blefes com 33% ou 120%.\nFISH:\n- Betar todos os blefes 150%. Não ir thin por valor.",
        "bC xX b": "REG:\n- Favorecer dar call com todos os bluffcatchers. Depois de 33% flop, dar raise por blefes contra si de até 50% river.\nFISH:\n- Favorecer dar call com todos os bluffcatchers até size de 75%. Depois de até 50% flop, dar raise por blefes contra si de até 50% river.",
        "bC xX x": "REG:\n- Betar todos os blefes com 33% ou 120%, mãos médias 33% ou 50% (dar call contra o raise).\n- Mãos nuts 120%. Mãos boas 75% e valores dar com call contra o raise.\nFISH:\n- Betar todos os blefes com 120%, mãos médias 30% ou 50% (dar call contra o raise). Mãos nuts 120%, mãos boas 75% e foldar contra o raise.",
        "bC xBc xB": "REG:\n- Betar todos os blefes com 33% ou 120% (não importa size turn).\n- Favorecer o fold contra raise depois que betar por valor.\nFISH:\n- Betar todos os blefes com 50%. Favorecer o fold contra raise depois que betar por valor.",
        "bRc xBc xB": "REG:\n- Betar todos os blefes com 50%. Favorecer give up quando bloquear o range de fold do vilão.\nFISH:\n- Betar todos os blefes com 50%.",
        "bRc xX x": "REG:\n- Betar todos os blefes com 33% ou 70%.\nFISH:\n- Betar todos os blefes com 150%.",
        "xBc xBc xB": "REG:\n- Betar todos os blefes com 50% ou 120%. Favorecer give up quando bloquear o range de fold do vilão.\n- Não ir muito thin por valor. Favorecer o fold contra raise depois que betar por valor.\nFISH:\n- Betar todos os blefes com 50%. Não ir muito thin por valor. Favorecer o fold contra raise depois que betar por valor.",
        "xBc xX b": "REG:\n- Favorecer dar call com todos os bluffcatchers (quanto menor a size mais overblefe).\n- Contra 50% river dar raise de 3-4x. Size menor que 50% evitar.\nFISH:\n- Favorecer dar call com todos os bluffcatchers até 120%.",
        "xBc xX x": "REG:\n- Betar todos os blefes com 33% ou 50%. Mãos médias 33% ou 50% (dar call contra o raise).\n- Mãos nuts 120%. Mãos boas 75% e valores dar com call contra o raise.\nFISH:\n- Betar todos os blefes com 50%. Mãos médias 30% ou 50% (não ir tão thin igual contra reg, dar call contra o raise apenas contra os mais agressivos). Mãos nuts 120%. Mãos boas 75% e foldar contra o raise.",
        "xBrC bC bC": "REG:\n- Defender GTO. Atenção aos datapoints.\nFISH:\n- Defender GTO. Atenção aos datapoints.",
        "xBrC bC x": "REG:\n- Betar todos os blefes com 50% ou all in se o vilão estiver muito capado.\nFISH:\n- Betar todos os blefes com 75%.",
        "xBrC xX x": "REG:\n- Betar todos os blefes com 33% ou 120%.\nFISH:\n- Betar todos os blefes com 33%.",
        "xX bC b": "REG:\n- Dar call com todos os bluffcatchers, linha muito overblefada.\n- Quando turn for 33-75% dar raise por blefe (3-4x).\nFISH:\n- Dar call com todos os bluffcatchers contra size de até 70%. Quando turn for 33% dar raise por blefe (3-4x).",
        "xX bC xB": "REG:\n- Betar todos os blefes com 50% ou 150%.\nFISH:\n- Betar todos os blefes com 75% ou 150%.",
        "xX xBc x": "REG:\n- Betar todos os blefes com 120%.\nFISH:\n- Betar todos os blefes com 120%.",
        "xX xX b": "REG:\n- Dar call com todos os bluffcatchers contra size de até 70%. Quando turn for 33-50% dar raise por blefe (3-4x).\nFISH:\n- Dar call com todos os bluffcatchers contra size de até 70%. Quando turn for 33-50% dar raise por blefe (3-4x)."
      },

    "3BP OOP PFR": {
        "B": "Cbet range 33%\nExceto em boards low conectados ou monotom.",
        "Br": "REG:\nDefesa GTO.\nFISH:\nNão overfoldar até size de 4x+.\nCall com mão que tenham valow de showdown\n3bet/shove com HEB (OESD+).",
        "Xb": "REG:\nDefesa GTO e dar overraise contra 33% e 50% (especialmente contra o BTN).\nvs Bb e em formações tight, foldar mãos que mixed.\nFISH:\n Não overfoldar.",     
        "Bc B ou X": "REG:\n Check: Mãos boas, médias e *airs*\nDraws fortes jogar de XR allin\nBet:\nMelhores top pairs e overpairs\nMãos que não bloqueiam range de fold do vilão\nMãos que tem blockers para o range de call e pode ser um blefe bom no river dependendo do runnout\nAirs nos hotspots: Overcards, turn pareando carta média ou baixa\nFISH:\n Check: Mãos boas, médias e airs\nDraws fortes jogar de XR allin\nBet:\nMelhores top pairs e overpairs\nDraws que não tem equity suficiente para XR ou XC\nAirs nos hotspots: Overcards, turn pareando carta média ou baixa.",
        "BrC Xb":"REG:\nOverfoldar contra CO e EP\nFISH:\nDar Call com todos bluffcatchers, a não ser que seja uma overbet.",
        "XbC XbC": "REG:\nLinha underblefada contra todas formações, não temos incentivo de continuar com mãos marginais. Apenas os puro call.\nFISH:\nDar com com todos bluffcatchers, linha muito overblefada por fish.",
        "Xx B": "Bet airs e mãos com valor de showdown size de 33%\nBetar melhores draws com size de 75%",
        "XbRc B": "Continuar barrelando apenas mãos com 3 streets de valor e blefes que betam por teoria",
        "Bc Bc B": "REG:\nBetar todas as mãos com size de all in. A não ser que seja um puro giveup river por teoria\nCom mãos de valor não ir tão thin\nFISH:\nBetar todas as mãos com size de all in ou 50% em situações inelásticas\nCom mãos de valor também betar all in",
        "Bc Xx B": "REG:\n Blefar mãos sem valor de showdown por B70, B120 ou all in (escolha o size dependendo da natureza do board)\nBlock bet com mãos médias e call contra raise do BTN e fold contra outras\nMãos de valor que não são fortes o suficiente pra shovar, betar 75%\nCheck raise com mãos que bloqueiam o range de check do vilão\nCaso bloquear, bet 120% ou all in\nFISH:\nBlefar mãos sem valor de showdown por B120\nMãos de valor, ter o mesmo orientação contra regs",
        "Bc Xx Xb": "REG:\nCall com todos bluffcathers até size de 70% contra BTN\nTender a overfoldar nas outras formações dependendo dos datapoints\nFISH:\nCall com todos bluffcathers",
        "BrC XbC Xb": "REG:\nFoldar todos bluffcathers\nFISH:\nCall todos bluffcathers. Não importa a size",
        "BrC Xx B": "REG:\nBetar todos os blefes com all in\nFISH:\nBetar todos os blefes com 100%",
        "BrC Xx Xb": "REG:\nCall todos bluffcathers. Não importa a size\nFISH:\nCall todos bluffcathers. Não importa a size",
        "XbC XbC XbC": "REG:\nLinha underblefada, pagar somente dominando valor\nFISH:\nCall todos bluffcathers. Não importa a size",
        "XbC Xx B": "REG:\nExiste um grande overfold para todas as sizes padrão usar 120% (all in também é valido)\nBlock bet com mãos médias e favorecer o fold se tomar raise em todas formações\nFISH:\nMesma orientação contra reg mas caso tomar raise, favorer o call",
        "XbC Xx B": "REG:\nCall todos bluffcathers. Não importa a size\nFISH:\nCall todos bluffcathers. Não importa a size",
        "Xx Bc B": "REG:\nDepois de 33% turn, betar todos os blefes 120%\nDepois de 75% turn ser seletivos com os blefes podendo usar 75% novamente ou all in (depende do SPR)\nBlock bet com mãos médias e favorecer o fold caso tomar raise\nCom mãos muito boas betar 120% ou all in\nFISH:\nDepois de 33% turn, betar todos os blefes 100%\nDepois de 75% turn betar blefes  50%\nBlock bet com mãos médias e favorecer o call caso tomar raise\nCom mãos muito boas betar 120% ou all in",
        "Xx XbC Xb": "REG:\nLinha overblefada em todas formações (atenção ao board e a interação com o range do vilão) até size de 75%\nNão dar call de A high pois no range de blefe nessa linha tem bastante low pair\nFISH:\nCall todos bluffcathers, até size de 100%",
        "Xx Xx B": "Betar todos os blefes com 75% ou 120%, existe um grande overfold."
    },

};
