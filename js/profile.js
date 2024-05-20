const profiles = {
    profile1: {
        image: '../gambar/desti.jpeg',
        name: 'Desti Karmini N.',
        role: '237006001',
        bio: 'Laporan dan Analisis'
    },
    profile2: {
        image: '../gambar/rosi.jpeg',
        name: 'Rossi Nur A.',
        role: '237006003',
        bio: 'Back End Developer'
    },
    profile3: {
        image: '../gambar/matin.jpeg',
        name: 'Matin Rusydan',
        role: '237006030',
        bio: 'Back End Developer'
    },
    profile4: {
        image: '../gambar/zaky.jpeg',
        name: 'Zaky Zahran P.',
        role: '237006033',
        bio: 'UI/UX Designer'
    },
    profile5: {
        image: '../gambar/dikri.jpeg',
        name: 'Dikri Asrul F.',
        role: '237006039',
        bio: 'Laporan dan Analisis'
    }
};

function showProfile(profileKey) {
    const profile = profiles[profileKey];
    console.log(profile); 
    document.getElementById('profile-image').src = profile.image;
    document.getElementById('profile-name').innerText = profile.name;
    document.getElementById('profile-role').innerText = profile.role;
    document.getElementById('profile-bio').innerText = profile.bio;
}

