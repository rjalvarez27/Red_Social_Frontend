export function Imagen() {
    const fileInput = document.getElementById('image');

    fileInput.addEventListener('change', function() {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            img.src = selectedFile.name
        }
    })

    if(document.querySelector("#image")){
        const imagen = document.querySelector("#image");
        imagen.onchange = function(e) {
            const uploadimagen = document.querySelector("#image").value;
            const fileimg = document.querySelector("#image").files;
            const nav = window.URL || window.webkitURL;
            const contactAlert = document.querySelector('#form_alert');
            if(uploadimagen !=''){
                const type = fileimg[0].type;

                if(type != 'image/jpeg' && type != 'image/jpg' && type != 'image/png'){
                    contactAlert.innerHTML = '<p class="errorArchivo">El archivo no es válido.</p>';
                    if(document.querySelector('#img')){
                        document.querySelector('#img').remove();
                    }

                    imagen.value="";
                }else{  
                        contactAlert.innerHTML='';
                        if(document.querySelector('#img')){
                            document.querySelector('#img').remove();
                        }
                        const objeto_url = nav.createObjectURL(this.files[0]);
                        console.log(objeto_url)
                        document.querySelector('#photo').innerHTML = "<img id='img' src="+objeto_url+">";
                        console.log(img.height)
                    }
            }
        }
    }
}