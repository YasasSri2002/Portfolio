 document.addEventListener('DOMContentLoaded', function() {
     const mobileMenueToggle = document.getElementById('mobileMenueToggle');
     if (mobileMenueToggle) {
         mobileMenueToggle.addEventListener('click', () => {
             const mobileNavBar = document.getElementById('mobileNavBar');
                    if (mobileNavBar) {
                        mobileNavBar.classList.toggle('hidden');
                    } else {
                        console.error('Element with id "mobileNavBar" not found');
                    }
            const iconBtn = document.getElementById('mobileMenueToggleIcon');

            if(iconBtn.classList.contains("fa-bars")){     
                iconBtn.classList.remove('fa-bars');
                iconBtn.classList.add('fa-xmark');
            }else{
               iconBtn.classList.remove('fa-xmark');
                iconBtn.classList.add('fa-bars'); 
            }

         });
     } else {
         console.error('Element with id "mobileMenueToggle" not found');
     }
   });