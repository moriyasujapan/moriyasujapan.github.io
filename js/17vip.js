function obfuscate(scr) {
    const obfuscatorOptions = {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        // debugProtection: true,
        // debugProtectionInterval: true,
        // disableConsoleOutput: true,
        identifierNamesGenerator: 'mangled', // or 'hexadecimal'
        identifiersPrefix: '',
        inputFileName: '',
        log: false,
        numbersToExpressions: true,
        renameGlobals: true,
        selfDefending: true,
        simplify: true,
        splitStrings: true,
        splitStringsChunkLength: 10,
        stringArray: true,
        stringArrayCallsTransform: true,
        stringArrayCallsTransformThreshold: 1,
        stringArrayEncoding: ['base64', 'rc4'],
        stringArrayIndexShift: true,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayWrappersCount: 5,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersType: 'function',
        stringArrayThreshold: 1,
        transformObjectKeys: true,
        unicodeEscapeSequence: true
    };

    var obfuscationResult = JavaScriptObfuscator.obfuscate(scr, obfuscatorOptions);
    return obfuscationResult.getObfuscatedCode();      
}

function gen() {
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let cvv = document.getElementById("cvv").value;
    let script = "";
    script += 'document.getElementById("credit_checkbox").click();' + "\n";
    script += 'document.getElementById("cc_cvv").value = "' + cvv + '";' + "\n";
    script += 'document.getElementById("cc_mailAddress").value = "' + email + '";' + "\n";
    script += 'document.getElementById("cc_mailAddressConfirm").value = "' + email + '";' + "\n";
    script += 'document.getElementById("cc_telno").value = "' + tel + '";' + "\n";
    script += 'document.getElementById("credit_form").submit();';
    script = obfuscate(script);

    document.getElementById("scr").innerHTML = "javascript:" + script;
    document.getElementById("result").style.display = "block";
    selectAll();
}
function selectAll() {
    document.getElementById("scr").select();
}

const button = document.getElementById('generate');
button.onclick = gen;

