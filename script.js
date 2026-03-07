const characterDB = {
    gaseol: {
        name: "가설", rank: "GEN 3 (혈원 생성형)", ether: "98%", combat: "90%", danger: "85%",
        bio: "대-혈귀 전선의 최상위 부대 '크림슨 베인'의 리더. 상냥한 미소와 능청스러운 태도 뒤에 심연을 감춘 완벽주의자다. 평소에는 엄살을 부리며 전면에 나서지 않지만, 철저하게 계산된 기만술로 적을 통제하는 데 탁월하다. 자신의 진짜 능력을 철저히 은폐하고 있다.",
        skills: [
            "<strong class='highlight'>[치유와 정화]</strong> 손상된 세포를 결합하고 혈귀의 독소를 정화하는 희귀 능력.",
            "<strong class='highlight'>[불타는 피]</strong> 기만술의 끝에 드러나는 진짜 패. 접촉하는 모든 것을 잿더미로 만드는 고열의 피를 방출한다."
        ], theme: "blue"
    },
    yangseonhee: {
        name: "양선희", rank: "GEN 1 (혈체 강화형)", ether: "60%", combat: "85%", danger: "50%",
        bio: "크림슨 베인의 선봉장. 평소에는 만사가 귀찮은 듯 행동하며 애정 결핍 기질을 보이지만, 전투에 돌입하면 혈압을 폭주시켜 신체를 한계 이상으로 강화한다. 유전자 변이로 인해 발현되는 용의 형질이 특징이다.",
        skills: [
            "<strong class='highlight'>[용린 (龍鱗)]</strong> 극도로 치솟은 혈압을 바탕으로 피부를 용의 비늘처럼 단단하게 경질화한다."
        ], theme: "blue"
    },
    yunari: {
        name: "유나리", rank: "GEN 3 (혈원 생성형)", ether: "90%", combat: "75%", danger: "80%",
        bio: "과묵하고 소심한 성격의 스페셜리스트. 현실과 환상을 자주 혼동하며 만성적인 수면 부족에 시달린다. 그녀가 만들어내는 '피 안개'는 전장을 완벽한 환각의 도가니로 빠뜨려 피아를 불문하고 감각을 교란시킨다.",
        skills: [
            "<strong class='highlight'>[혈무 (Blood Mist)]</strong> 공기 중에 특수한 피 안개를 흩뿌려 흡입한 자의 뇌신경을 교란하고 환각을 유발한다."
        ], theme: "blue"
    },
    rouge: {
        name: "루즈", rank: "GEN 2 (혈류 지배형)", ether: "75%", combat: "80%", danger: "40%",
        bio: "천진난만하고 허당 기질이 다분한 타격수. 길눈이 어두워 작전 구역을 이탈하기 일쑤지만, 전투 센스만큼은 발군이다. 체외의 피를 실시간으로 굳혀 다양한 형태의 무기로 응용하는 유연한 전투 스타일을 구사한다.",
        skills: [
            "<strong class='highlight'>[형태 변환]</strong> 피를 즉각적으로 응고시켜 예리한 칼날, 관통력이 뛰어난 창, 변칙적인 채찍 등으로 조작한다."
        ], theme: "blue"
    },
    sora: {
        name: "소라", rank: "GEN 2 (혈류 지배형)", ether: "70%", combat: "75%", danger: "45%",
        bio: "자유분방한 성격의 저격수. 타인에게 까칠하게 굴면서도 은근히 챙겨주는 기질이 있다. 피를 극한의 밀도로 압축해 탄환을 대체하며, 보이지 않는 사각지대에서 치명적인 일격을 가한다.",
        skills: [
            "<strong class='highlight'>[혈침 (Blood Needle)]</strong> 피를 머리카락보다 얇고 단단한 바늘 형태로 초미세 압축하여 장거리에서 고속 발사한다."
        ], theme: "blue"
    },

    leeseohyun: {
        name: "이서현", rank: "GEN 3 / 혈귀화", ether: "120%", combat: "99%", danger: "100%",
        bio: "제2의 대재앙을 획책하는 카르민 소사이어티의 지배자. 인간의 몸으로 혈귀화되었으나 완벽한 지성과 우아함을 유지하고 있다. 필멸자들의 발버둥을 유흥거리로 여기는 잔혹한 성정의 소유자.",
        skills: [
            "<strong style='color:var(--neon-red)'>[절대 영도]</strong> 닿는 즉시 대상의 혈류를 세포 단위부터 완벽하게 얼어붙게 만드는 죽음의 피를 생성한다."
        ], theme: "red"
    },
    parkjunwoo: {
        name: "박준우", rank: "GEN 1 / 고위 혈귀", ether: "95%", combat: "95%", danger: "90%",
        bio: "천 년 전 대재앙 당일 변이된 고대 혈귀. 이성을 상실한 일반 혈귀들과 달리 인간의 언어를 구사하며 묵묵히 이서현의 그림자 역할을 수행한다. 오랜 세월 축적된 압도적인 투기를 뿜어낸다.",
        skills: [
            "<strong style='color:var(--neon-red)'>[혈갑 (Blood Armor)]</strong> 체내 혈액을 초고압으로 순환시켜 전신을 파괴 불가능한 갑옷의 형태로 경질화하고 모든 물리적 충격을 튕겨낸다."
        ], theme: "red"
    },
    jungsoeun: {
        name: "정소은", rank: "GEN 2 (혈류 지배형)", ether: "85%", combat: "80%", danger: "85%",
        bio: "카르민 소사이어티의 참모. 극도의 결벽증을 앓고 있으며, 모든 변수를 통제하려 드는 냉철하고 계산적인 지략가다. 능력 또한 그녀의 성격처럼 한 치의 오차도 없는 정밀한 구조물 형성에 특화되어 있다.",
        skills: [
            "<strong style='color:var(--neon-red)'>[정밀 응고]</strong> 피를 응고시켜 단순한 무기를 넘어 기하학적이고 복잡한 도구 및 트랩 구조물을 순식간에 직조해낸다."
        ], theme: "red"
    },
    kimarang: {
        name: "김아랑", rank: "GEN 2 / 혈귀", ether: "80%", combat: "85%", danger: "75%",
        bio: "만사가 귀찮은 듯 염세적인 태도로 일관하는 혈귀. 대의나 사상보다는 금전적인 이득을 위해 조직에 합류했다. 인간의 언어를 완벽히 구사하며, 원거리에서 적을 유린하는 저격 및 견제에 능하다.",
        skills: [
            "<strong style='color:var(--neon-red)'>[혈탄 (Blood Bullet)]</strong> 자신의 피를 고밀도로 압축하여 파괴적인 위력을 지닌 총알 형태로 연사한다."
        ], theme: "red"
    },
    kangdonghyuk: {
        name: "강동혁", rank: "GEN 1 (혈체 강화형)", ether: "70%", combat: "92%", danger: "80%",
        bio: "과거 뒷골목 격투기를 제패했던 챔피언 출신. 호탕하고 단순한 성격으로 조직에 대한 의리 하나로 움직인다. 능력을 발동하면 이성이 마비되는 대신 폭발적인 투쟁 본능만이 남게 된다.",
        skills: [
            "<strong style='color:var(--neon-red)'>[리미트 브레이크]</strong> 심박수와 혈류량을 극한으로 폭주시켜 근력, 반사신경, 지구력을 생물학적 한계치 이상으로 끌어올린다."
        ], theme: "red"
    },

    choijinhyuk: {
        name: "최진혁", rank: "GEN 2 (혈류 지배형)", ether: "85%", combat: "88%", danger: "60%",
        bio: "국가 직속 대능력자 통제 기관 B.C.U의 현장 지휘관. 만성 피로와 위경련에 시달리면서도 임무를 완수해 내는 워커홀릭. 범죄자 및 폭주하는 능력자를 생포하고 제압하는 데 최적화된 능력을 지녔다.",
        skills: [
            "<strong style='color:#b300ff'>[구속의 사슬]</strong> 피를 강철 같은 사슬 형태로 응고시켜 적을 포박함과 동시에 체내 흐름을 차단하여 능력을 억제한다."
        ], theme: "purple"
    },
    leedaeun: {
        name: "이다은", rank: "GEN 3 (혈원 생성형)", ether: "95%", combat: "70%", danger: "85%",
        bio: "B.C.U에 갓 배속된 사고뭉치 신입. 매사에 열정적이지만 덤벙거리는 성격 탓에 실수가 잦다. 하지만 각성 조건이 까다로운 GEN 3 능력자답게 파괴력 자체는 부대 내 최고 수치를 기록하고 단숨에 전장을 장악한다.",
        skills: [
            "<strong style='color:#b300ff'>[블러드 밤 (Blood Bomb)]</strong> 공기와 접촉하는 순간 연쇄 폭발을 일으키는 불안정한 성질의 피를 생성한다."
        ], theme: "purple"
    },
    hanjisoo: {
        name: "한지수", rank: "GEN 2 (혈류 지배형)", ether: "80%", combat: "50%", danger: "20%",
        bio: "독설을 입에 달고 사는 B.C.U 전속 군의관. 까칠한 태도와 달리 아군의 생존율을 획기적으로 끌어올리는 대체 불가능한 인력이다.",
        skills: [
            "<strong style='color:#b300ff'>[혈액 봉합]</strong> 타인의 혈류를 임의로 조작하고 응고시켜 치명적인 외상을 즉각적으로 지혈하고 치료한다."
        ], theme: "purple"
    },

    ain: {
        name: "아인", rank: "GEN 3 (혈원 생성형)", ether: "88%", combat: "60%", danger: "75%",
        bio: "도심 뒷골목에서 은밀한 바(Bar)를 운영하는 정보상의 여왕. 매사에 계산적이고 능글맞은 태도로 상대의 의중을 떠본다. 무력 충돌보다는 정보전과 심리전에 특화된 독특한 능력을 사용한다.",
        skills: [
            "<strong style='color:#a0a0a0'>[블러드 퍼퓸]</strong> 생성된 피를 향수 형태로 기화시킨다. 이를 흡입한 대상은 신경계가 마비되어 거짓말을 할 수 없게 되며 강제 자백을 유도당한다."
        ], theme: "grey"
    },
    choijongho: {
        name: "최종호", rank: "GEN 1 (혈체 강화형)", ether: "65%", combat: "80%", danger: "65%",
        bio: "거친 입담을 자랑하는 기계식 의수의 웨폰 스미스. 무기 개조 및 수리의 장인으로 불린다. 전면전보다는 상대의 심리와 상태를 꿰뚫어 보는 통찰력이 그의 진정한 무기다.",
        skills: [
            "<strong style='color:#a0a0a0'>[동체 시력 강화]</strong> 안구 주변으로 혈류를 집중시켜 상대의 미세한 심박 및 혈압 변화를 열화상처럼 감지, 감정선과 긴장도를 완벽히 간파해 낸다."
        ], theme: "grey"
    }
};

const sfxHologram = new Audio('hologram.mp3');
const sfxClick = new Audio('click.mp3');
sfxHologram.volume = 0.5;
sfxClick.volume = 0.8; 

let savedScrollPosition = 0;

document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.getElementById("intro-screen");
    const mainContainer = document.getElementById("main-container");

    if (!sessionStorage.getItem("introPlayed")) {
        setTimeout(() => {
            introScreen.style.opacity = "0";
            introScreen.style.visibility = "hidden";
            mainContainer.style.opacity = "1";
            sessionStorage.setItem("introPlayed", "true");
        }, 3000);
    } else {
        introScreen.style.display = "none";
        mainContainer.style.opacity = "1";
    }
});

function switchTab(tabId, playSound = true) {
    if (playSound) {
        sfxHologram.currentTime = 0; 
        sfxHologram.play().catch(e => console.log("Audio standby"));
    }

    const currentActive = document.querySelector('.tab-content.active');
    if (currentActive && currentActive.id === 'characters' && tabId === 'character-detail') {
        savedScrollPosition = window.scrollY;
    }

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    let targetNavId = tabId === 'character-detail' ? 'characters' : tabId;
    const clickedBtn = document.querySelector(`button[onclick*="switchTab('${targetNavId}')"]`);
    if(clickedBtn) clickedBtn.classList.add('active');

    if (currentActive && currentActive.id === 'character-detail' && tabId === 'characters') {
        window.scrollTo(0, savedScrollPosition);
    } else if (tabId !== 'character-detail') {
        window.scrollTo(0, 0);
    }
}

function openCharacterDetail(charId) {
    const char = characterDB[charId];
    if(!char) return;

    sfxClick.currentTime = 0;
    sfxClick.play().catch(e => console.log("Audio standby"));

    document.body.classList.remove('impact-shake');
    void document.body.offsetWidth; 
    document.body.classList.add('impact-shake');

    const nameEl = document.getElementById('detail-name');
    nameEl.textContent = char.name;
    nameEl.setAttribute('data-text', char.name);
    
    document.getElementById('detail-rank').textContent = `분류: ${char.rank}`;
    document.getElementById('detail-bio').innerHTML = char.bio;

    const skillsUl = document.getElementById('detail-skills');
    skillsUl.innerHTML = '';
    char.skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = skill;
        skillsUl.appendChild(li);
    });

    let colorHex = "#00f3ff"; 
    if(char.theme === 'red') colorHex = "#ff0055";
    else if(char.theme === 'purple') colorHex = "#b300ff";
    else if(char.theme === 'grey') colorHex = "#a0a0a0";

    nameEl.style.color = colorHex;
    nameEl.style.textShadow = `0 0 15px ${colorHex}`;
    document.getElementById('detail-visual-box').style.borderColor = colorHex;
    document.getElementById('detail-visual-box').style.color = colorHex;

    document.getElementById('stat-ether').style.width = '0%';
    document.getElementById('stat-combat').style.width = '0%';
    document.getElementById('stat-danger').style.width = '0%';

    switchTab('character-detail', false);

    setTimeout(() => {
        document.getElementById('stat-ether').style.width = char.ether;
        document.getElementById('stat-combat').style.width = char.combat;
        document.getElementById('stat-danger').style.width = char.danger;
        
        const fills = document.querySelectorAll('.stat-fill:not(.alert-fill)');
        fills.forEach(fill => {
            fill.style.background = colorHex;
            fill.style.boxShadow = `0 0 10px ${colorHex}`;
        });
    }, 100);
}

const mouseGlow = document.getElementById('mouseGlow');
document.addEventListener('mousemove', (e) => {
    mouseGlow.style.left = `${e.clientX}px`;
    mouseGlow.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseover', (e) => {
    if (e.target.closest('button, .character-card, .timeline-item')) {
        mouseGlow.style.width = '600px';
        mouseGlow.style.height = '600px';
        mouseGlow.style.background = 'radial-gradient(circle, rgba(255, 0, 85, 0.1) 0%, transparent 60%)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('button, .character-card, .timeline-item')) {
        mouseGlow.style.width = '400px';
        mouseGlow.style.height = '400px';
        mouseGlow.style.background = 'radial-gradient(circle, rgba(0, 243, 255, 0.08) 0%, transparent 60%)';
    }
});