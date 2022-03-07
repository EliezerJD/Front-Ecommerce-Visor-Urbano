function validationLogin(){
    var output;
    var proceed = true;
    var str = $('#contact-form-data').serializeArray();
    var email=document.getElementById("email").value;
    var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    $('#contact-form-data input').each(function() {
        if(!$(this).val()){
            proceed = false;
        }
    });
    
    if(!proceed){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: '<div class="text-danger">Debes completar todos los campos.</div>'
        })
    }else if(email.search(patron)!=0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: '<div class="text-danger">Has introducido un email inválido.</div>'
        })
    }else{
        window.angularComponentReference.zone.run(() => {window.angularComponentReference.loadAngularFunction();});
    }
}

function renderCartAux(){
  window.angularComponentReference9.zone.run(() => {window.angularComponentReference9.loadAngularFunction();});
}

function validationRegister(){
    var output;
    var proceed = true;
    var str = $('#contact-form-data').serializeArray();
    var nombre=document.getElementById("nombre").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var patron2 = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{6,20}$/;

    $('#contact-form-data input').each(function() {
        if(!$(this).val()){
            proceed = false;
        }
    });
    
    if(!proceed){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: '<div class="text-danger">Debes completar todos los campos.</div>'
        }) 
    }else{
        if(nombre.length<6){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">Debes introducir nombre(s) y apellidos válidos.</div>'
            })
        }else if(email.search(patron)!=0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">Has introducido un email inválido.</div>'
            })

        }else if(pass.search(patron2)!=0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y debe ser mayor a 8 caracteres.</div>'
            })
        }else if(pass!=confirmpassword){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">La contraseña y la confirmación de contraseña no coinciden.</div>'
            })
        }else{
            window.angularComponentReference2.zone.run(() => {window.angularComponentReference2.loadAngularFunction();});
        }
    }
}

function success(ok){
    Swal.fire({
        icon: 'success',
        title: 'Correcto!',
        html: '<div class="text-success">'+ok+'</div>',
        confirmButtonText: 'Ok',
    }).then((result) => {
        location.reload();
    })  
}

function fail(error){
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        html: '<div class="text-danger">'+error+'</div>'
    })
}

function successReset(ok){
    Swal.fire({
        icon: 'success',
        title: 'Correcto!',
        html: '<div class="text-success">'+ok+'</div>',
        confirmButtonText: 'Ok',
    })
}

function successBuy(ok){
    Swal.fire({
        icon: 'success',
        title: 'Compra exitosa!',
        html: '<div class="text-success">'+ok+'</div>',
        confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace("/usuario");
        localStorage.removeItem('shopCart');
      }
    })
}

function successCart(ok){
    Swal.fire({
       icon: 'success',
        title: 'Correcto!',
        html: '<div class="text-success">'+ok+'</div>',
        confirmButtonText: 'Seguir comprando',
        showDenyButton: true,
        denyButtonText: "Pagar ahora",
        denyButtonColor: '#5cb85c',
    }).then((result) => {
      if (result.isDenied) {
        window.location.replace("/carrito");
      }
    })
}

function resetPassword(){
    Swal.fire({
      title: '¿Olvidaste tu contraseña?',
      html: '<div class="text-danger">Ingresa tu email, te enviaremos un link para restablecer tu contraseña.</div>',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
          var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
          if(email.search(patron)!=0){
              Swal.showValidationMessage(
                  'Email inválido'
              )
          }else{
              localStorage.setItem('emailReset', email);
          }
      },
      allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
          window.angularComponentReference3.zone.run(() => {window.angularComponentReference3.loadAngularFunction();});  
      })
}

function viewDetailBuyer(direccion, email, envio, code){
  var htmlAux ='';
  var htmlAux2='';
  if(direccion!=null){
    var data = direccion.split(",");
  if(data.length==12){
    htmlAux= '<div class="container"><div class="row"><div class="col-12"><p style="margin-bottom: 0px;" >'+data[0]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[1]+'</p>'+
'<p style="margin-bottom: 0px;">CP: '+data[2]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[4]+', '+data[3]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[5]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[6]+' #'+data[7]+'</p>'+
'<p style="margin-bottom: 0px;">Entre la calle: '+data[8]+'</p>'+
'<p style="margin-bottom: 0px;">Y la calle: '+data[9]+'</p>'+
'<p style="margin-bottom: 30px;">'+data[10]+'</p>'+
'<p style="margin-bottom: 0px;">'+email+'</p>'+
'<p style="margin-bottom: 0px;">Tipo de envío: '+envio+'</p>'+ htmlAux2+
'</div></div></div>';
  }else if(data.length>12){
    htmlAux = '<div class="container"><div class="row"><div class="col-12"><p style="margin-bottom: 0px;" >'+data[0]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[1]+'</p>'+
'<p style="margin-bottom: 0px;">CP: '+data[2]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[4]+', '+data[3]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[5]+'</p>'+
'<p style="margin-bottom: 0px;">'+data[6]+' #'+data[7]+' Interior '+data[8]+'</p>'+
'<p style="margin-bottom: 0px;">Entre la calle: '+data[9]+'</p>'+
'<p style="margin-bottom: 0px;">Y la calle: '+data[10]+'</p>'+
'<p style="margin-bottom: 30px;">'+data[11]+'</p>'+
'<p style="margin-bottom: 0px;">'+email+'</p>'+
'<p style="margin-bottom: 0px;">Tipo de envío: '+envio+'</p>'+ htmlAux2+
'</div></div></div>';
  }
  }else{
    htmlAux ='<div class="container"><div class="row"><div class="col-12">'+
    '<p style="margin-bottom: 30px;">Tipo de envío: '+envio+'</p>'+
    '<p style="margin-bottom: 0px;">'+email+'</p>'+
'</div></div></div>';
  }
  if(code!=null){
    htmlAux2 =  '<p style="margin-bottom: 0px;">Código de rastreo: '+code+'</p>';
  }

  
  Swal.fire({
    title: 'Información de envío',
    html: htmlAux,
    confirmButtonText: 'Cerrar',
  })
}

function viewDetailOrder(carrito){
  var htmlGen = '';
  for(let x=0; x<carrito.length;x++){
    htmlGen= htmlGen + 
    '<tr><td class="invert">'+(x+1)+'</td>'+
    '<td class="invert-image">'+
    '<img style="height: 80px;" src="'+carrito[x].image1+'" alt=" " class="img-responsive">'+
    '</td>'+
    '<td class="invert">'+carrito[x].nombre+'</td>'+
    '<td class="invert">'+carrito[x].precio+'</td>'+
    '<td class="invert">'+carrito[x].cantidad+'</td>';
  }
  Swal.fire({
    title: 'Detalle del pedido',
    html: '<hr><div class="table-responsive">'+
        '<table class="timetable_sub">'+
          '<thead>'+
            '<tr>'+
              '<th>No</th>'+
              '<th>Imagen</th>'+
              '<th>Producto</th>'+
              '<th>Precio</th>'+
              '<th>Cantidad</th>'+
            '</tr>'+
          '</thead>'+
          '<tbody>'+
              '<tr class="rem1">' + htmlGen + '</tr>'+
          '</tbody>'+
        '</table>'+
      '</div>',
      customClass: 'swal-height',
    confirmButtonText: 'Cerrar', 
  })
}

function openAddProductModal(){
    var data = [];
    const { value: file } = Swal.fire({
      title: 'Agregar Producto',
      html: '<hr> <br> <form id="addProduct"> <div class="form-group">' +
      '<input type="text" name="nombre"  placeholder="Nombre del producto" class="form-control"></div>'+
              '<div class="form-group">'+
                '<select class="form-control" id="sel">'+
                  '<option selected>Elige una categoría</option>'+
                  '<option value="Lencería">Lencería</option>'+
                  '<option value="Vintage">Vintage</option>'+
                  '<option value="Segunda Mano">Segunda Mano</option>'+
                  '<option value="Prendas De Autor">Prendas De Autor</option>'+
                  '<option value="Novias Vintage">Novias Vintage</option>'+
                  '<option value="Home Decor">Home Decor</option>'+
                  '<option value="Vintage Deluxe">Vintage Deluxe</option>'+
                '</select>'+        
              '</div>'+
              '<div class="form-group">'+
                '<input type="number" name="precio" placeholder="Precio" class="form-control">'+
              '</div>'+
              '<div class="form-group">'+
                '<input type="number" name="descuento" placeholder="Descuento (%)" class="form-control">'+
              '</div>'+
              '<div class="form-group">'+
                '<textarea id="desc" name="descripcion" placeholder="Descripción del producto" rows="2" class="form-control"></textarea>'+ 
              '</div>'+
              '<div class="form-group">'+
                '<input type="number" name="stock" placeholder="Stock del producto" class="form-control">'+
              '</div>'+
              'Foto Principal:<div class="form-group">'+
                '<input name="file-input" id="img1"  type="file" accept="image/*" onchange="preview1(this)" />'+
              '</div></form>'+
              'Foto 2:<div class="form-group">'+
                '<input name="file-input" #file  type="file" accept="image/*" onchange="preview2(this)" />'+
              '</div>'+
              'Foto 3:<div class="form-group">'+
                '<input name="file-input" #file  type="file" accept="image/*" onchange="preview3(this)" />'+
              '</div>'+
              'Foto 4:<div class="form-group">'+
                '<input name="file-input" #file  type="file" accept="image/*" onchange="preview4(this)" />'+
              '</div>'+
              'Foto 5:<div class="form-group">'+
                '<input name="file-input" #file  type="file" accept="image/*" onchange="preview5(this)" />'+
              '</div>',
      confirmButtonText: 'Agregar',
      preConfirm: () => {
          var proceed = true;
          $('#addProduct input').each(function() {
              if(!$(this).val()){
                  proceed = false;    
              }else{
                  data.push($(this).val());
              }
          });
          if(!proceed){
              data = [];
              Swal.showValidationMessage(
                  `Debes completar todos los campos.`
              )
          }else if(document.getElementById("sel").value=='Elige una categoría'){
              data = [];
              Swal.showValidationMessage(
                  `Elige una categoría válida.`
              )
          }else if(document.getElementById("desc").value===''){
              data = [];
              Swal.showValidationMessage(
                  `Debes completar todos los campos.`
              )
          }
          else{
              data.push(document.getElementById("sel").value);
              data.push(document.getElementById("desc").value);
              data.splice(4, 1);
              window.angularComponentReference4.zone.run(function() {return window.angularComponentReference4.loadAngularFunction(data);});
          }
      }
    })  
}

function openVerProductModal(producto){
  var tam=0;
  var htmlTemp='';
  if(producto.image1!=null){
    htmlTemp=htmlTemp + '<div class="col-12">'+
      '<img class="imgNew" src="'+producto.image1+'">'+
    '</div>'+
    '<br>'
  }
  if(producto.image2!=null){
    htmlTemp=htmlTemp + '<div class="col-12">'+
      '<img class="imgNew" src="'+producto.image2+'">'+
    '</div>'+
    '<br>'
  }
  if(producto.image3!=null){
    htmlTemp=htmlTemp + '<div class="col-12">'+
      '<img class="imgNew" src="'+producto.image3+'">'+
    '</div>'+
    '<br>'
  }
  if(producto.image4!=null){
    htmlTemp=htmlTemp + '<div class="col-12">'+
      '<img class="imgNew" src="'+producto.image4+'">'+
    '</div>'+
    '<br>'
  }
  if(producto.image5!=null){
    htmlTemp=htmlTemp + '<div class="col-12">'+
      '<img class="imgNew" src="'+producto.image5+'">'+
    '</div>'+
    '<br>'
  }
  
  Swal.fire({
    title: producto.nombre,
    html: '<h4>'+producto.categoria+'</h4><hr><div class="container">'+
    '<div class="row">'+ htmlTemp +
    '</div>'+
      '</div>',
      customClass: 'swal-height',
    confirmButtonText: 'Cerrar', 
  })
}

function openEditProductModal(producto){
  var data = [];
  const { value: file } = Swal.fire({
      title: 'Agregar Producto',
      html: '<hr> <br> <form id="editProduct"> <div class="form-group">' +
      '<input type="text" name="nombre" placeholder="Nombre del producto"  value="'+producto.nombre+'" class="form-control"></div>'+
              '<div class="form-group">'+
                '<select class="form-control" id="sel">'+
                  '<option selected>'+producto.categoria+'</option>'+
                  '<option value="Lencería">Lencería</option>'+
                  '<option value="Vintage">Vintage</option>'+
                  '<option value="Segunda Mano">Segunda Mano</option>'+
                  '<option value="Prendas De Autor">Prendas De Autor</option>'+
                  '<option value="Novias Vintage">Novias Vintage</option>'+
                  '<option value="Home Decor">Home Decor</option>'+
                  '<option value="Vintage Deluxe">Vintage Deluxe</option>'+
                '</select>'+        
              '</div>'+
              '<div class="form-group">'+
                '<input type="number" name="precio" placeholder="Precio" value="'+producto.precio+'" class="form-control">'+
              '</div>'+
              '<div class="form-group">'+
                '<input type="number" name="descuento" placeholder="Descuento (%)" value="'+producto.descuento+'" class="form-control">'+
              '</div>'+
              '<div class="form-group">'+
                '<textarea id="desc" name="descripcion" placeholder="Descripción del producto" rows="2" class="form-control">'+producto.descripcion+'</textarea>'+ 
              '</div>'+
              '<div class="form-group">'+
                '<input type="number" name="stock" placeholder="Stock del producto" value="'+producto.stock+'" class="form-control">'+
              '</div> </form>'+
              '<div class="form-group">'+
              '<a style="font-size=5px;">Importante: Si no desea actualizar las fotos se mantendrán las anteriores. </a> <br>'+
              '</div>'+
              'Foto Principal:<div class="form-group">'+
                '<input name="file-input" id="img1"  type="file" accept="image/*" onchange="preview1(this)" />'+
              '</div>'+
              'Foto 2:<div class="form-group">'+
                '<input name="file-input" type="file" accept="image/*" onchange="preview2(this)" />'+
              '</div>'+
              'Foto 3:<div class="form-group">'+
                '<input name="file-input" type="file" accept="image/*" onchange="preview3(this)" />'+
              '</div>'+
              'Foto 4:<div class="form-group">'+
                '<input name="file-input" type="file" accept="image/*" onchange="preview4(this)" />'+
              '</div>'+
              'Foto 5:<div class="form-group">'+
                '<input name="file-input" type="file" accept="image/*" onchange="preview5(this)" />'+
              '</div>',
      confirmButtonText: 'Actualizar',
      preConfirm: () => {
          var proceed = true;
          $('#editProduct input').each(function() {
              if(!$(this).val()){
                  proceed = false;    
              }else{
                  data.push($(this).val());
              }
          });
          if(!proceed){
              data = [];
              Swal.showValidationMessage(
                  `Debes completar todos los campos.`
              )
          }else if(document.getElementById("sel").value=='Elige una categoría'){
              data = [];
              Swal.showValidationMessage(
                  `Elige una categoría válida.`
              )
          }else if(document.getElementById("desc").value===''){
              data = [];
              Swal.showValidationMessage(
                  `Debes completar todos los campos.`
              )
          }
          else{
              data.push(document.getElementById("sel").value);
              data.push(document.getElementById("desc").value);
              data.push(producto.id);
              data.push(producto.image1);
              data.push(producto.image2);
              data.push(producto.image3);
              data.push(producto.image4);
              data.push(producto.image5);
              window.angularComponentReference8.zone.run(function() {return window.angularComponentReference8.loadAngularFunction(data);});
          }
      }
    })  
}

function preview1(element) {
    if (element.length === 0)
      return;
    window.angularComponentReference5.zone.run(function() {return window.angularComponentReference5.loadAngularFunction(element);});
}

function preview2(element) {
    if (element.length === 0)
      return;
    window.angularComponentReference6.zone.run(function() {return window.angularComponentReference6.loadAngularFunction(element);});
}

function preview3(element) {
    if (element.length === 0)
      return;
    window.angularComponentReference7.zone.run(function() {return window.angularComponentReference7.loadAngularFunction(element);});
}
function preview4(element) {
    if (element.length === 0)
      return;
    window.angularComponentReference9.zone.run(function() {return window.angularComponentReference9.loadAngularFunction(element);});
}
function preview5(element) {
    if (element.length === 0)
      return;
    window.angularComponentReference10.zone.run(function() {return window.angularComponentReference10.loadAngularFunction(element);});
}

function addAdress(){
  if(localStorage.getItem('logued')=='true'){
    var data='';
     Swal.fire({
       title: 'Agregar dirección',
       html: '<hr> <br> <form id="addAdress"> <div class="form-group">' +
       '<input type="text" name="nombredir" placeholder="Tipo de dirección (Casa, Oficina, Trabajo)" class="form-control"></div>'+
       '<input type="text" name="nombreDes" placeholder="Nombre de la persona que recibe" class="form-control"></div>'+
       '<input type="number" name="cp" placeholder="Código postal" class="form-control"></div>'+
       '<input type="text" name="estado" placeholder="Estado" class="form-control"></div>'+
       '<input type="text" name="municio" placeholder="Delegación / Municipio" class="form-control"></div>'+
       '<input type="text" name="colonia" placeholder="Colonia / Barrio" class="form-control"></div>'+
       '<input type="text" name="calle" placeholder="Calle" class="form-control"></div>'+
       '<input type="text" name="numExt" placeholder="Número exterior" class="form-control"></div>'+
       '<input type="text" name="numInt" id="opc" placeholder="Número interior (opcional)" class="form-control"></div>'+
       '<input type="text" name="calle1" placeholder="Entre la calle" class="form-control"></div>'+
       '<p style="margin-top: -20px; margin-bottom:5px;">y</p>'+
       '<input type="text" name="calle2" placeholder="La calle" class="form-control"></div>'+
       '<input type="number" name="tel" placeholder="Teléfono de contacto" class="form-control"></div>',
       confirmButtonText: 'Agregar',
       preConfirm: () => {
            var proceed = true;
            $('#addAdress input').each(function() {
                if(!$(this).val()){
                    proceed = false;    
                }else{
                    data = data + $(this).val()+",";
                }
            });
            if(!proceed){
                var data2 = data.split(",");
                if(document.getElementById("opc").value=='' && data2.length<=11){
                  data='';
                  Swal.showValidationMessage(
                    `Debes completar todos los campos.`
                  )
                }else if(document.getElementById("opc").value!='' && data2.length<=12){
                  data='';
                  Swal.showValidationMessage(
                    `Debes completar todos los campos.`
                  )
                }else{
                  window.angularComponentReference10.zone.run(function() {return window.angularComponentReference10.loadAngularFunction(data);});
                  data='';
                }
            }else{
                window.angularComponentReference10.zone.run(function() {return window.angularComponentReference10.loadAngularFunction(data);});
                data='';
            }
        }
     })
  }else{
    fail("Necesitas iniciar sesión o registrarte para agregar una dirección.");
  }
  
}

function editAdress(){
  var data=localStorage.getItem('dir').split(",");
  var data2='';
  if(data.length<=12){
    var añadido ='<input type="text" name="numInt" id="opc2" placeholder="Número interior (opcional)" class="form-control"></div>'+
     '<input type="text" name="calle1" placeholder="Entre la calle" value="'+data[8]+'" class="form-control"></div>'+
     '<p style="margin-top: -20px; margin-bottom:5px;">y</p>'+
     '<input type="text" name="calle2" placeholder="La calle" value="'+data[9]+'" class="form-control"></div>'+
     '<input type="number" name="tel" placeholder="Teléfono de contacto" value="'+data[10]+'" class="form-control"></div>';
  }else{
    var añadido = '<input type="text" name="numInt" id="opc2" placeholder="Número interior (opcional)" value="'+data[8]+'" class="form-control"></div>'+
     '<input type="text" name="calle1" placeholder="Entre la calle" value="'+data[9]+'" class="form-control"></div>'+
     '<p style="margin-top: -20px; margin-bottom:5px;">y</p>'+
     '<input type="text" name="calle2" placeholder="La calle" value="'+data[10]+'" class="form-control"></div>'+
     '<input type="number" name="tel" placeholder="Teléfono de contacto" value="'+data[11]+'" class="form-control"></div>';
  }
   Swal.fire({
     title: 'Actualizar dirección',
     html: '<hr> <br> <form id="editAdress"> <div class="form-group">' +
     '<input type="text" name="nombredir" placeholder="Tipo de dirección (Casa, Oficina, Trabajo)" value="'+data[0]+'" class="form-control"></div>'+
     '<input type="text" name="nombreDes" placeholder="Nombre de la persona que recibe" value="'+data[1]+'" class="form-control"></div>'+
     '<input type="number" name="cp" placeholder="Código postal" value="'+data[2]+'" class="form-control"></div>'+
     '<input type="text" name="estado" placeholder="Estado" value="'+data[3]+'" class="form-control"></div>'+
     '<input type="text" name="municio" placeholder="Delegación / Municipio" value="'+data[4]+'" class="form-control"></div>'+
     '<input type="text" name="colonia" placeholder="Colonia / Barrio" value="'+data[5]+'" class="form-control"></div>'+
     '<input type="text" name="calle" placeholder="Calle" value="'+data[6]+'" class="form-control"></div>'+
     '<input type="text" name="numExt" placeholder="Número exterior" value="'+data[7]+'" class="form-control"></div>'+
     añadido,
     confirmButtonText: 'Actualizar',
     preConfirm: () => {
          data2='';
          var proceed = true;
          $('#editAdress input').each(function() {
              if(!$(this).val()){
                  proceed = false;    
              }else{
                  data2 = data2 + $(this).val()+",";
                  
              }
          });
          if(!proceed){
            var data3 = data2.split(",");
              if(document.getElementById("opc2").value=='' && data3.length<=11){
                data2='';
                Swal.showValidationMessage(
                  `Debes completar todos los campos.`
                )
              }else if(document.getElementById("opc2").value!='' && data3.length<=12){
                data2='';
                Swal.showValidationMessage(
                  `Debes completar todos los campos.`
                )
              }else{
                window.angularComponentReference11.zone.run(function() {return window.angularComponentReference11.loadAngularFunction(data2);});
                data2='';
              }
          }else{
              window.angularComponentReference11.zone.run(function() {return window.angularComponentReference11.loadAngularFunction(data2);});
              data2='';
          }
      }
   })
}

function viewDespachar(uid, email, envio){
  var titulo=null;
  var htmlAux='';
  switch (envio) {
    case "Envío a domicilio":{
      Swal.fire({
      title: "Tipo de entrega: Envío a domicilio",
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        window.angularComponentReference12.zone.run(function() {return window.angularComponentReference12.loadAngularFunction(uid,email,1,null);});
      },
      }).then((result) => {
        if(result.isConfirmed){
          successReset("Se ha notificado al cliente"); 
        }
      })
      break;
    }
    case "Recoger en tienda":{
      Swal.fire({
      title: "Tipo de entrega: Recoger en tienda",
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        window.angularComponentReference12.zone.run(function() {return window.angularComponentReference12.loadAngularFunction(uid,email,2,null);});
      },
      }).then((result) => {
        if(result.isConfirmed){
          successReset("Se ha notificado al cliente"); 
        }  
      })
      break;
    }
    case "Estafeta":{
      Swal.fire({
      title: "Tipo de entrega: Estafeta",
      html: '<h2>Ingresa el número de rastreo:</h2',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      preConfirm: (code) => {
        if(code.length!=10){
          Swal.showValidationMessage(
            'EL código de rastreo es inválido'
          )
        }else{
          window.angularComponentReference12.zone.run(function() {return window.angularComponentReference12.loadAngularFunction(uid,email,3,code);});
        }
      },
      }).then((result) => {
        if(result.isConfirmed){
          successReset("Se ha notificado al cliente"); 
        } 
      })
      break;
    }
    case "Correos de méxico":{
      Swal.fire({
      title: "Tipo de entrega: Correos de méxico",
      html: '<h2>Ingresa el número de rastreo:</h2',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      preConfirm: (code) => {
        if(code.length!=13){
          Swal.showValidationMessage(
            'EL código de rastreo es inválido'
          )
        }else{
          window.angularComponentReference12.zone.run(function() {return window.angularComponentReference12.loadAngularFunction(uid,email,4,code);});
        }
      },
      }).then((result) => {
        if(result.isConfirmed){
          successReset("Se ha notificado al cliente"); 
        } 
      })
      break;
    }
  }
  
}

function removeActive(value){
  var t;
  var element;
  for(let x=1; x<=4; x++){
    t= "f"+x.toString();
    element = document.getElementById(t);
    element.classList.remove("cbp-filter-item-active");
  }
  t= "f"+value.toString();
  element = document.getElementById(t);
  element.classList.add("cbp-filter-item-active");
}

function removeActive2(value){
  var t;
  var element;
  for(let x=1; x<=8; x++){
    t= "c"+x.toString();
    element = document.getElementById(t);
    element.classList.remove("filtro-activo");
  }
  t= "c"+value.toString();
  element = document.getElementById(t);
  element.classList.add("filtro-activo");
}

