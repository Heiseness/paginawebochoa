const farm = document.getElementById("todo");
                        farm.addEventListener("submit", function(cosa){
                            cosa.preventDefault();
                            let vienedata = new FormData(form);
                            let tabladeref = document.getElementById("tablax")
                            let nuevalinea = tabladeref.insertRow(-1);
                            
                            let nuevacel = nuevalinea.insertCell(0);
                            nuevacel.textContent= vienedata.get("fabricacion")+"mm" 
                            
                            nuevacel = nuevalinea.insertCell(1);
                            nuevacel.textContent= Math.floor(84*vienedata.get("costodefab"))

                            nuevacel = nuevalinea.insertCell(2);
                            var v;
                            v = vienedata.get("fabricacion")*vienedata.get("fabricacion");
                            nuevacel.textContent= (2000000/(84*vienedata.get("costodefab")))

                            nuevacel = nuevalinea.insertCell(3);
                            var v;
                            v = vienedata.get("fabricacion")*vienedata.get("fabricacion");
                            nuevacel.textContent= ((84*vienedata.get("costodefab"))*(50/(70686/v)))
                            
                            nuevacel = nuevalinea.insertCell(4);
                            if(vienedata.get("stock")=="Muy bajo"){
                                nuevacel.textContent= "25,000 dlls extras por oblea"
                                    }
                                    if(vienedata.get("stock")=="Bajo"){
                                        nuevacel.textContent= "10,000 dlls extra por oblea"
                                    }
                                    if(vienedata.get("stock")=="Medio"){
                                        nuevacel.textContent="solo se agregan cotos de envio"
                                    }
                                    if(vienedata.get("stock")=="Alto"){
                                        nuevacel.textContent="solo se agregan cotos de envio"
                                    }

                            vienedata.get("fabri");
                            })