const $ = (s) => document.querySelector(s);

        const $ta = $("#contenedor");
        const $a = $(".encriptar");
        const $h = $(".desencriptar");
        const $e = $(".resultado");
        const $w = $(".anuncio");
        const $g = $("form");
        const $m = $(".mensaje");

        let value;

        const llaves = {
            e: "enter",
            i: "imes",
            a: "ai",
            o: "ober",
            u: "ufat"
        };

        $g.addEventListener("summit", (a) => a.preventDefault());

        function convertir() {
            var x = document.getElementById("contenedor");
            x.value = x.value.toLowerCase();

            if (x.value !== "") {
                $m.style.display = "none";                
            }
        }

        function encriptar(t) {
            return t.replace(/[eiaou]/g, (k) => llaves[k]);
        }

        function validar(text) {
            const pattern = new RegExp(/^[a-z\s]+$/g);
            return pattern.test(text);
        }

        function desencriptar(t) {
            return t.replace(/(enter|imes|ai|ober|ufat)/g, (k) => {
                for (let c in llaves) {
                    if (llaves[c] === k) return c;
                }
            });
        }

        $ta.addEventListener("input", (a) => {
            value = a.target.value;
        }
        );

        $a.addEventListener("click", () => {
            $e.innerText = encriptar(value);
        });

        $h.addEventListener("click", () => {
            $e.innerText = desencriptar(value);
        });
        
        document.querySelector('.copiar').addEventListener('click', function(){
            let copyText = document.querySelector(".resultado").value ;
            navigator.clipboard.writeText(copyText).then(()=>{
                alert("copied!");
            });
        });
        
