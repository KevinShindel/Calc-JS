let amd_choice = [{name:'RX580', speed: 224000},
    {name: 'RX570', speed: 150000},
    {name: 'RX560', speed: 60000},
    {name: 'RX480', speed: 185000},
    {name: 'RX470', speed: 165000},
    {name: 'RX460', speed: 150000}]
let nvidia_choice = [{name: 'GTX1080ti', speed: 576000},
    {name: 'GTX1080', speed: 400000},
    {name: 'GTX980', speed: 200000},
    {name: 'GTX760', speed: 45000},
    {name: 'GTX680', speed: 29000}]

$NVIDIA = document.getElementById('nVidia');
$AMD = document.getElementById('AMD');

Array.from(nvidia_choice).forEach((item, index) => {
    let element = Object.assign(document.createElement('option',),
        {'innerHTML': item.name, 'value': item.name})
    element.dataset.speed = item.speed
    $NVIDIA.append(element)
})

Array.from(amd_choice).forEach((item) => {
    let element = Object.assign(document.createElement('option',),
        {'innerHTML': item.name, 'value': item.name})
    element.dataset.speed = item.speed
    $AMD.append(element)
})

