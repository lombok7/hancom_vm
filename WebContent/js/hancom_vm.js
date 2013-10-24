// JavaScript Document

// 0 ~ size-1 까지의 겹치지 않는 난수 발생(삽입 방법).
// size-1 크기의 flag 배열을 두어 초기값을 0으로 셋팅 한 후,
// 발생한 난수 번째 flag가 0이면 난수를 seq 배열에 넣고, flag를 1로 변경합니다.
// flag가 1 이면 다시 난수를 발생시키며, 이 과정을 반복합니다.
function getSequence(size) {
		
	var flag = new Array();	// flag 배열.
	var seq = new Array();		// 난수를 저장할 배열.
	var count = 0;				// seq 배열 첨자 변수.
	
	// flag 배열을 0으로 초기화 합니다.
	for (var i=0;i<size;i++) {
		flag[i] = 0;
	}
	 
	do {                    
		// 0 ~ size-1 사이의 난수를 발생합니다.
		var tempRandom = Math.floor(Math.random() * size);
                   
		if (flag[tempRandom] == 0) {
			seq[count] = tempRandom;
			flag[tempRandom] = 1;  
			count++;                                          
		}
	} while (count < size);         
	
	return seq;
}
