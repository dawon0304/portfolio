$(document).ready(function () {
    $("#fullpage").fullpage({
        //options here
        navigation: true, // 섹션네비게이션
        navigationPosition: 'right', // 섹션네비게이션 의 위치 설정 right / left   

        navigationTooltips: [
            'firstSlide',
            'secondSlide',
            'thirdSlide',
            'fourthSection',
            '푸터 입니다.'
        ], // 섹션 네비게이션 에 손을 올렸을때 나오는 텍스트 

        controlArrows: true, // 슬라이드 컨트롤 애로우 생성 
        slidesNavigation: true, // 슬라이드 컨트롤 네비게이션 생성
        slidesNavPosition: 'bottom' // 슬라이드 컨트롤 네비게이션 위치 top / bottom
    });
});


function handleOnChange(e) {
    const values = [];
    const texts = [];

    for(let i=0; i < e.options.length; i++) {
        const option = e.options[i];
        if(option.selected) {
            values.push(option.value);
            texts.push(option.text);
        }
    }

    document.getElementById('values').innerText = values;
    
}

