
        let loader = document.querySelector('.loader')

        fetch("https://randomuser.me/api/?results=10")
        .then( (rawData) =>{
                return rawData.json()
        })
        .then((data)=>{
                setTimeout(function(){
                    // console.log("hi")
                    let users = data.results
                // console.log(users)
                const grid = document.getElementById('userGrid');

                users.forEach(user => {
                        console.log(user.name['first'])

                        // create card
                        const card = document.createElement('article');
                        card.className = 'card';

                        const avatar = document.createElement('div');
                        avatar.className = 'avatar';
                        const img = document.createElement('img');
                        img.src = user.picture.large;
                        img.alt = `${user.name.first} ${user.name.last}`;
                        avatar.appendChild(img);

                        const meta = document.createElement('div');
                        meta.className = 'meta';

                        const name = document.createElement('div');
                        name.className = 'name';
                        name.textContent = `${user.name.first} ${user.name.last}`;

                        const email = document.createElement('div');
                        email.className = 'email';
                        email.textContent = user.email;

                        const info = document.createElement('div');
                        info.className = 'info';

                        const locationPill = document.createElement('div');
                        locationPill.className = 'pill';
                        locationPill.textContent = `${user.location.city}, ${user.location.country}`;

                        const phonePill = document.createElement('div');
                        phonePill.className = 'pill';
                        phonePill.textContent = user.phone;

                        info.appendChild(locationPill);
                        info.appendChild(phonePill);

                        meta.appendChild(name);
                        meta.appendChild(email);
                        meta.appendChild(info);

                        card.appendChild(avatar);
                        card.appendChild(meta);

                        grid.appendChild(card);
                });
                loader.style.display = 'none'
                },1500)

        })
        .catch((err) => {
            
            setTimeout(function(){
            loader.style.display = 'none'
            const hed = document.createElement('h4');
            hed.innerText = `Something went wrong: ${err?.message ?? err}`;
            document.body.appendChild(hed);
            console.error('Error occurred:', err);
            }, 1500)
        });